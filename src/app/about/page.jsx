import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const getPost = async () => {
    try{
        const res = await fetch("http://localhost:4000/books")
        if(!res.ok){
            throw new Error("Wrong")
        }
        return await res.json()
    }
    catch(err){
        console.error(err)
        throw new Error("Wrong")
    }
}

const page = async () => {

    const data = await getPost()
    // console.log(data)

    return (
        <div>
            <h2 className='text-center text-3xl font-bold my-10'>Hello About</h2>
            <div className='w-[80%] mx-auto'>
            <h2 className='text-center font-bold text-2xl'>Posts {data.length}</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    data.map(v => (
                        <div key={v.id} className="border rounded-2xl shadow-md p-4 hover:shadow-xl transition duration-300">

                <div className="w-full h-52 relative">
                    <Image
                    src={v.image}
                    alt={v.title}
                    fill
                    className="object-cover rounded-xl"
                    />
                </div>

                <div className="mt-4 space-y-2">
                    <h2 className="text-lg font-bold">{v.title}</h2>

                    <p className="text-sm text-gray-500">
                    by {v.author}
                    </p>

                    <p className="text-sm text-blue-500">
                    {v.category}
                    </p>

                    <div className="flex justify-between items-center">
                    <span className="text-green-600 font-semibold text-lg">
                        ${v.price}
                    </span>

                    <span className="text-yellow-500">
                        ⭐ {v.rating}
                    </span>
                    </div>

                    <p className="text-sm text-gray-600">
                    Stock: {v.stock}
                    </p>

                    <Link href={`/about/${v.id}`} className="w-full mt-2 bg-purple-500 text-white py-2 rounded-xl hover:bg-purple-600 px-3 transition">
                    Buy Now
                    </Link>
                </div>
                </div>
                    ))
                }
            </div>
        </div>
        </div>
    );
};

export default page;