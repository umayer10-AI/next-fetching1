import React from 'react';

// export const dynamic = "force-dynamic"

const getPost = async () => {
    try{
        // const res = await fetch("http://localhost:4000/products",{cache: "force-cache"})
        // const res = await fetch("http://localhost:4000/products",{cache: "no-store"})
        const res = await fetch("http://localhost:4000/products",{next: {revalidate: 10}})
        if(!res.ok){
            throw new Error("Something went wrong")
        }
        return res.json()
    }
    catch(err){
        console.error(err)
        throw new Error("Something went wrong")
    }
}

const page = async () => {

    const data = await getPost()
    // console.log(data)

    return (
        <div>
            <h2 className='text-center text-3xl font-bold my-10'>Hello Products</h2>
            <div className='w-[80%] mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                    {
                        data.map(p => (
                            <div key={p.id} className="border rounded-2xl shadow-md p-4 hover:shadow-xl transition duration-300">

                        <div className="mt-4 space-y-2">
                            <h2 className="text-lg font-bold">{p.name}</h2>

                            <p className="text-gray-500 text-sm">{p.category}</p>

                            <div className="flex justify-between items-center">
                            <span className="text-xl font-semibold text-green-600">
                                ${p.price}
                            </span>

                            <span className="text-yellow-500">
                                ⭐ {p.rating}
                            </span>
                            </div>

                            <p className="text-sm text-gray-500">
                            Stock: {p.stock}
                            </p>

                            <button className="w-full mt-2 bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition">
                            Add to Cart
                            </button>
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