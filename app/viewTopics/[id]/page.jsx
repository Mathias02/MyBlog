import Comments from '@/components/Comments';
import FormComments from '@/components/FormComments';
import { prisma } from '@/lib/prisma';



const postPage = async ({params}) => {
  const post = await prisma.post.findFirst({
    where: {
      id: params.id,
    },
  });

  return (
    <div className='mt-20 max-w-2xl mx-auto bg-white text-black text-left px-3 py-2 mb-20'>
      <h1 className='font-bold text-2xl mb-2 text-red-700 capitalize'>{post?.title}</h1>
      <p>{post?.content}</p>
      <Comments postId={params.id}/>
      <FormComments postId={params.id}/>
    </div>
  )
}

export default postPage