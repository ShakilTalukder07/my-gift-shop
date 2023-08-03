import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleProduct from './SingleProduct';

const Categories = () => {

    const products = useLoaderData();

    // console.log(products);

    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 my-[90px] ml-10">
            {
                products.map((product) => <SingleProduct
                    key={product._id}
                    product={product}
                ></SingleProduct>)
            }
        </div>
    );
};

export default Categories;