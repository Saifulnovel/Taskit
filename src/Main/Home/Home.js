import React from 'react';
import Jump from "react-reveal/Jump";

const Home = () => {
    return (
      <div className="bg-red-50">
        <div className="container p-48">
          <h1 className="text-6xl ">
            Complete your task with our service,{" "}
            <span>
              It's very{" "}
              <Jump>
                <span className="font-bold text-red-500">Quick</span>
              </Jump>{" "}
              and
              <Jump>
                <span className="font-bold text-red-500">Easy</span>
              </Jump>{" "}
              to use
            </span>{" "}
          </h1>
          <button
            type="button"
            class="mt-14 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Go for it
          </button>
        </div>
      </div>
    );
};

export default Home;