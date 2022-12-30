import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthContext';
import img from  "./android-chrome-192x192.png"

const Navbar = () => {
  // const {user} = useContext(AuthContext)
    return (
      <div className=" border-gray-200 rounded bg-slate-300 dark:bg-gray-800 dark:border-gray-700">
        <nav className="p-3 mx-10">
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <Link to="/" className="flex items-center">
              <img src={img} className="h-6 mr-3 sm:h-10" alt="Taskit Logo" />
              <h1 className="self-center text-3xl font-bold whitespace-nowrap dark:text-white">
                Task<span className="text-red-700">it</span>
              </h1>
            </Link>
            <button
              data-collapse-toggle="navbar-solid-bg"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-solid-bg"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-solid-bg"
            >
              <ul className="flex flex-col mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                <li>
                  <Link to="/" className="font-bold">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/addtask" className="font-bold">
                    Add a Task
                  </Link>
                </li>
                <li>
                  <Link to="/mytask" className="font-bold">
                    My Task
                  </Link>
                </li>
                <li>
                  <Link to="/completedtask" className="font-bold">
                    Completd Task
                  </Link>
                </li>

                {/* {user ? (
                  <>
                    <li>
                      <Link to="/register" className="font-bold">
                        Logout
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to="/signin" className="font-bold">
                        Login
                      </Link>
                    </li>
                  </>
                )} */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
};

export default Navbar;