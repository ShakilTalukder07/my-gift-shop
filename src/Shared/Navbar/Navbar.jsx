import { Link } from "react-router-dom";
import eipLogo from '../../assets/logo4.gif'
import { BiUserCircle } from 'react-icons/bi'
import { ImGithub } from 'react-icons/im'
import { BsDiscord } from 'react-icons/bs'

const Navbar = () => {


    const menu = <>
        <li>
            <Link className="mx-4 text-xl hover:border-b-2 hover:text-white p-2 font-semibold border-b-white duration-100" to="/allEips">AllEIPs</Link>
        </li>
        <li>
            <Link className="mx-4 text-xl hover:border-b-2 hover:text-white p-2 font-semibold border-b-white duration-100" to="/type">Type</Link>
        </li>
        <li>
            <Link className="mx-4 text-xl hover:border-b-2 hover:text-white p-2 font-semibold border-b-white duration-100" to="/status">Status</Link>
        </li>
        <li>
            <Link className="mx-4 text-xl hover:border-b-2 hover:text-white p-2 font-semibold border-b-white duration-100" to="/insight">Insight</Link>
        </li>
        {/* <li>
            <Link className="mx-4 text-xl hover:border-b-2 hover:text-white p-2 font-semibold border-b-white duration-100" to="/signIn">SignIn</Link>
        </li> */}
    </>

    return (
        <div>
            <div className="navbar bg-[#036666] text-white rounded-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinknecap="round" strokeLinknejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 bg-[#036666] w-[350px] mr-2 text-white rounded-box">

                            {menu}

                            <li tabIndex={0}>
                                <details>
                                    <summary className="text-xl hover:border-b-2 ml-4 p-4 font-semibold border-b-white duration-100">Resources</summary>
                                    <ul className="p-6">
                                        <li><a>EIPs & Strandardization Process</a></li>
                                        <li><a>Ethereum Network Upgrade Process</a></li>
                                        <li><a>EIP:20 Token Standard</a></li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>
                    <Link to="/" >
                        <img className=" w-32 h-14 " src={eipLogo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 bg-[#036666] text-white">

                        {menu}

                        <li tabIndex={0}>
                            <details>
                                <summary className="text-xl hover:border-b-2 hover:text-white p-2 font-semibold border-b-white duration-100">Resources</summary>
                                <ul className="p-2 hover:text-white">
                                    <li className="bg-[#036666] hover:text-white rounded-lg my-1 py-1 px-1"><a>EIPs & Standardization Process</a></li>
                                    <li className="bg-[#036666] hover:text-white rounded-lg mb-1 py-1 px-1"><a>Ethereum Network Upgrade Process</a></li>
                                    <li className="bg-[#036666] hover:text-white rounded-lg py-1 px-1"><a>EIP:20 Token Standard</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <ImGithub className="w-7 h-7 mt-1"></ImGithub>
                        </div>
                    </label>
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <BsDiscord className="w-7 h-7 mt-1"></BsDiscord>
                        </div>
                    </label>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <BiUserCircle className="w-8 h-8 mt-1"></BiUserCircle>
                            </div>
                        </label>
                        <ul tabIndex={0} className=" p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 hover:text-white">
                            <li className="bg-[#036666] hover:text-white rounded-lg my-1"><a>Settings</a></li>
                            <li className="bg-[#036666] hover:text-white rounded-lg"><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;