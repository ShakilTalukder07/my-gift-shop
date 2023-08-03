import React, { useEffect, useState } from 'react';
import Category from './Category';

const SideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://gift-shop-server.vercel.app/productCategory")
            .then((res) => res.json())
            .then((data) => setCategories(data));
    }, []);

    // console.log(categories);

    return (
        <div className='mx-10'>
            <h1 className="text-2xl my-7 underline">Category</h1>
            <div className="bg-orange-100 p-3 h-120">
                {categories.map((category) => (
                    <Category
                        key={category?.id}
                        category={category} />
                ))}
            </div>
        </div>
    );
};

export default SideNav;