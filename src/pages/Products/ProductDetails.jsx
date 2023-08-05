import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const ProductDetails = () => {

    const product = useLoaderData()

    const { image_url, details, price, title } = product

    const [counter, setCounter] = useState(1)

    // Function is called everytime increment button is clicked
    const handleClick1 = () => {
        // Counter state is incremented
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }

    // Function is called everytime decrement button is clicked
    const handleClick2 = () => {
        // Counter state is decremented
        setCounter(counter + 1)
    }

    return (
        <div className='flex  gap-6 m-20'>
            <img className='w-1/2' src={image_url} alt="" />
            <div className='w-1/2'>
                <h1 className='text-3xl font-bold my-5'>{title}</h1>
                <hr />
                <h2 className='my-5'>{details}</h2>
                <hr />
                <h3 className='my-5 font-bold text-xl'>Price: ${price}</h3>
                <hr />
                <div className='my-5 flex justify-start items-center gap-2 rounded-3xl border border-black px-4 py-2 w-20'>
                    <AiOutlineMinus onClick={handleClick1}></AiOutlineMinus>
                    {counter}
                    <AiOutlinePlus onClick={handleClick2}></AiOutlinePlus>
                </div>
                <hr />
                <div className='flex gap-4 my-5'>
                    <button className='border border-black rounded-full px-6 py-2 bg-black text-white'>
                        <Link className='text-sm font-bold '>Buy Now</Link>
                    </button>
                    <button className='border border-black rounded-full px-6 py-2'>
                        <Link className='text-sm font-bold'>Add to Cart</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;