import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {

    const { image_url, price, title, details, rating } = product

    return (
        <div className="w-[200px] h-[250px] shadow-md">
            <div className='mx-2'>
                <img className='mb-2 w-full h-[170px]' src={image_url} alt="" />
                <div className='flex justify-between font-bold'>
                    <h1 className=''>{title}</h1>
                    <h1 className='text-sm'>${price}</h1>
                </div>
                {/* <p>{rating}</p> */}
                <button className='border border-black rounded-full mt-1'>
                    <Link className='text-xs font-bold px-2'>Add to Cart</Link>
                </button>
            </div>
        </div>
    );
};

export default Product;