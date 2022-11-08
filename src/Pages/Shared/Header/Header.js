import React, {  useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/doctor.png'
import { AuthContext } from '../../../Contexts/Authentications/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Header = () => {
    const {user, UserlogOut} = useContext(AuthContext);
    const handleUserLogout = () => {
        UserlogOut()
          .then(toast('User logged out!'))
          .catch(error => console.log(error))
      }
    console.log(user);
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
                        <Link to='/services'  className="flex items-center px-4 -mb-1  dark:border-transparent">Service</Link>
                    </li>
                    <li className="flex">
                        <Link to='/my-service'  className="flex items-center px-4 -mb-1  dark:border-transparent">My Service</Link>
                    </li>
                    <li className="flex">
                        <Link to='/myaddedservice'  className="flex items-center px-4 -mb-1  dark:border-transparent">Added Service</Link>
                    </li>
                    <li className="flex">
                        <Link to='/my-review'  className="flex items-center px-4 -mb-1  dark:border-transparent">My Review</Link>
                    </li>
                </ul>
                <div className="items-center flex-shrink-0 hidden z-40 lg:flex">
                    {
                        user?.email ? <Link><button onClick={handleUserLogout} className="self-center btn-primary px-8 py-3 rounded ">Sign Out</button></Link> 
                        : <>
                        <Link to='/login'><button className="self-center btn-primary px-8 py-3 rounded ">Login</button></Link> 
                        <Link to='/register'> <button className="self-center px-8 py-3 font-semibold rounded bg-blue-300 btn-outline ml-6 dark:bg-violet-400 text-white">Register</button></Link>
                        </>
                    }
                 
                </div>

        <ToastContainer />

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