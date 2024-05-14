import Comments from '@/components/Comments'
import FormComments from '@/components/FormComments'


const postPage = () => {
  return (
    <article className='mt-20 max-w-2xl mx-auto bg-white text-black px-3 py-2 h-100%'>
      <h1 className='font-bold text-2xl'>Post one</h1>
      <p>By Elle</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sunt dolore sit voluptatibus et nulla labore doloremque, minus dolor ipsam quam suscipit necessitatibus ratione impedit natus expedita modi quisquam! Voluptas!</p>
      <Comments />
      <FormComments />
    </article>
  )
}

export default postPage