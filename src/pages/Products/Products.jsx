import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Loading from '../../components/Loader/Loading';
import Product from './Product';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://gift-shop-server.vercel.app/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    console.log(products);

    // if (Loading) {
    //     return <Loading></Loading>
    // }

    return (
        <div>
            {/* <h2 className='text-3xl flex justify-center items-center mt-5'>Our Products</h2> */}
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 my-[40px] ml-5">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;