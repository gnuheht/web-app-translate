import React from 'react';
import { BsSearch, BsFillCloudHazeFill } from 'react-icons/bs';
const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div
        className="w-1/3 h-2/3 border rounded-lg
       border-gray-400 bg-white"
      >
        {/* button up */}
        <div className="text-center w-full">
          <h2 className="mt-10">
            <span className="text-4xl font-bold">Welcome to DEV INTS</span>
            <br />
            DEV INTS is a amazing developers
          </h2>
          <button className="w-9/12 rounded-md bg-blue-300 mt-5 text-md font-medium h-12 text-white">
            Continue with Google
          </button>
          <button className="w-9/12 rounded-md bg-slate-800 mt-2 text-md font-medium h-12 text-white">
            Continue with Google
          </button>
          <button className="w-9/12 rounded-md bg-black mt-2 text-md font-medium h-12 text-white">
            Continue with Google
          </button>
          <button className="w-9/12 rounded-md bg-green-950 mt-2 text-md font-medium h-12 text-white">
            Continue with Google
          </button>
        </div>
        <div className="text-center mt-5">
          <span className="after:">
            Have a password? Continue with your email address
          </span>
        </div>
        {/* form down */}
        <div className="text-center w-full">123</div>
      </div>
    </div>
  );
};

export default Login;
