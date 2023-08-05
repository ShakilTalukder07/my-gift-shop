import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {

    const { _id, image_url, price, title, details, rating } = product

    console.log(rating);

    return (
        <div className="w-[200px] h-[265px] shadow-md">
            <div className='mx-2'>
                <Link to={`${product._id}`}>
                    <img className='mb-2 w-full h-[170px]' src={image_url} alt="" />
                </Link>
                <div className='flex justify-between font-bold'>
                    <h1 className=''>{title}</h1>
                    <h1 className='text-sm'>${price}</h1>
                </div>
                <p className='text-sm'>{details.slice(0, 25)}</p>
                <button className='border border-black rounded-full mt-1'>
                    <Link className='text-xs font-bold px-2'>Add to Cart</Link>
                </button>
            </div>
        </div>
    );
};

export default Product;