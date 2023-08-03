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
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 my-[90px] ml-10">
            {
                products.map(product => <Product
                    key={product.id}
                    product={product}
                ></Product>)
            }
        </div>
    );
};

export default Products;