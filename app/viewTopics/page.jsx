import Link from "next/link";
import data from "/data/data";

const ViewTopics = () => {
  return (
    <section>
      <div className="max-w-4xl mx-auto mt-20 bg-slate-600 py-2">
        <h1 className="text-center text-3xl text-blue mb-5">Posts</h1>
        <div className="grid md:grid-cols-3 gap-2 text-black p-2">
          <Link href={'/viewTopics/id'}>
            <div className="box bg-white p-4">
              <h1 className="text-black font-bold">Box1</h1> 
              <p>It's been said that no one is allowed to see them</p>
              <p className="font-semibold">created by: Elle</p>
            </div>
          </Link>
          <div className="box bg-white p-4">
            <h1 className="text-black font-bold">Box2</h1> 
            <p>It's been said that no one is allowed to see them</p>
            <p className="font-semibold">created by: Djo</p>
          </div>
          <div className="box bg-white p-4">
            <h1 className="text-black font-bold">Box3</h1> 
            <p>It's been said that no one is allowed to see them</p>
            <p className="font-semibold">created by: Charles</p>
          </div>
          <div className="box bg-white p-4">
            <h1 className="text-black font-bold">Box4</h1> 
            <p>It's been said that no one is allowed to see them</p>
            <p className="font-semibold">created by: Sylvia</p>
          </div> 
          <div className="box bg-white p-4">
            <h1 className="text-black font-bold">Box5</h1> 
            <p>It's been said that no one is allowed to see them</p>
            <p className="font-semibold">created by: Georges</p>
          </div>
          <div className="box bg-white p-4">
            <h1 className="text-black font-bold">Box6</h1> 
            <p>It's been said that no one is allowed to see them</p>
            <p className="font-semibold">created by: Charles</p>
          </div>
          <div className="box bg-white p-4">
            <h1 className="text-black font-bold">Box7</h1> 
            <p>It's been said that no one is allowed to see them</p>
            <p className="font-semibold">created by: Sylvia</p>
          </div> 
          <div className="box bg-white p-4">
            <h1 className="text-black font-bold">Box8</h1> 
            <p>It's been said that no one is allowed to see them</p>
            <p className="font-semibold">created by: Georges</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ViewTopics