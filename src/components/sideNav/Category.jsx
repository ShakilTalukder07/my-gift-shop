import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {

    const { id, name } = category

    return (
        <div>
            <Link to={`/products/category/${id}`}>
                <div className="my-4 bg-white rounded py-3 px-4">{name}</div>
            </Link>
        </div>
    );
};

export default Category;