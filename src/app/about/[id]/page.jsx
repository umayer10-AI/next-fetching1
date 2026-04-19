import React from 'react';

export const generateStaticParams = async () => {
    const res = await fetch(`http://localhost:4000/books`)
    const data = await res.json()

    return data.map(v => ({id : v.id}))
}

const page = async ({params}) => {

    const {id} = await params
    const res = await fetch(`http://localhost:4000/books/${id}`)
    const data = await res.json()
    // console.log(id)

    return (
        <div>
            <h2>Books Details: {id}</h2>
            <div key={data.id}>
                <h2>{data.title}</h2>
                <p>{data.author}</p>
                <p>${data.price}</p>
            </div>
        </div>
    );
};

export default page;