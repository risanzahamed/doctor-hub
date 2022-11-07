import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo (1).png'

const Header = () => {

    return (

        <header className=" z-40 p-4  text-neutral-content">
            <div className="container flex justify-between h-16 mx-auto">
                <Link to='/'   aria-label="Back to homepage" className="flex z-40 items-center p-2">
                    <img src={logo} alt="" srcset="" />
                </Link>
                <ul className="items-stretch text-black hidden text-1xl font-semibold z-40 space-x-3 lg:flex">
                    <li className="flex">
                        <Link to='/'  className="flex items-center px-4 -mb-1  dark:border-transparent dark:text-violet-400 dark:border-violet-400">Home</Link>
                    </li>
                    <li className="flex">
                        <Link to='/tour'  className="flex items-center px-4 -mb-1  dark:border-transparent">Tour</Link>
                    </li>
                    <li className="flex">
                        <Link to='/contact'  className="flex items-center px-4 -mb-1  dark:border-transparent">Contact</Link>
                    </li>
                </ul>
                <div className="items-center flex-shrink-0 hidden z-40 lg:flex">
                    <Link to='/signin'><button className="self-center btn-primary px-8 py-3 rounded ">Sign in</button></Link>
                    <Link to='/signup'> <button className="self-center px-8 py-3 font-semibold rounded bg-blue-300 btn-outline ml-6 dark:bg-violet-400 text-white">Sign up</button></Link>
                </div>
                <button className="p-4 lg:hidden ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>

    );
};

export default Header;