import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineUser, AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai'

const Navbar = () => {
    return (
        <div className="navbar bg-[#E1A2A1]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li>
                            <a>Pages</a>
                            <ul className="p-2">
                                <li><Link to="/about">About US</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl">Gift Shop</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li tabIndex={0}>
                        <details>
                            <summary>Pages</summary>
                            <ul className="w-28">
                                <li><Link to="/about">About US</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <input type="text" placeholder="Search product" className="p-1 rounded-2xl hidden md:block lg:block" />
                <ul className="menu menu-horizontal px-1">
                    <li tabIndex={0}>
                        <details>
                            <summary className='text-sm'><span><AiOutlineUser className='w-4 h-4'></AiOutlineUser></span>Account</summary>
                            <ul className="w-28">
                                <li>
                                    <Link to="/signIn" className='bg-white text-black px-3 py-2 mx-3 rounded-3xl'>LogIn</Link>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <Link to="/cart" className='flex justify-center items-center gap-2'>
                            <span><AiOutlineShoppingCart></AiOutlineShoppingCart></span>Cart
                        </Link>
                    </li>
                </ul>
            </div>
        </div>

    );
};

export default Navbar;