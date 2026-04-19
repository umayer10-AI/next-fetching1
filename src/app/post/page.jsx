import React from 'react';

const getPost = async () => {
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        if(!res.ok){
            throw new Error("Somthing went wrong")
        }
        return await res.json()
    }
    catch(err){
        console.error(err)
        throw new Error("Something went wrong")
    }
}

const page = async () => {

    const data = await getPost()
    console.log(data)

    return (
        <div>
            <h2 className='text-center text-3xl font-bold my-10'>Hello Posts</h2>
        </div>
    );
};

export default page;