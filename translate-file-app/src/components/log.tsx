import React from 'react';
import { BsSearch, BsFillCloudHazeFill } from 'react-icons/bs';
const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div
        className=" w-max h-max border rounded-lg
       border-gray-400 bg-white"
      >
        {/* button up */}
        <div className="text-center w-full h-80">
          <h2 className="mt-10">
            <span className="text-4xl font-bold">Welcome to DEV INTS</span>
            <br />
            DEV INTS is a amazing developers
          </h2>
          <button className="w-9/12 rounded-md bg-blue-300 mt-5 text-md font-medium h-12 text-white">
            Continue with Google
          </button>
          <button className="w-9/12 rounded-md bg-[#24292e] mt-2 text-md font-medium h-12 text-white">
            Continue with Google
          </button>
          <button className="w-9/12 rounded-md bg-[#0a3e4a] mt-2 text-md font-medium h-12 text-white">
            Continue with Google
          </button>
          <button className="w-9/12 rounded-md bg-black mt-2 text-md font-medium h-12 text-white">
            Continue with Google
          </button>
          <div className="mt-5">
          <span className="after:">
            Have a password? Continue with your email address
          </span>
        </div>
        
        </div>
        {/* form down */}
        <div className="flex flex-col w-full justify-center items-center h-80">
          <form action="" className='w-9/12'>
            <div className='w-full'>
              <label htmlFor="" className='w-full'>Email</label>
              <input type="text" className='w-full border border-gray-500 rounded-md' />
            </div>
            <div className='w-full'>
              <label htmlFor="" className='w-full'>Email</label>
              <input type="text" className='w-full border border-gray-500 rounded-md' />
            </div>
            <div className='w-full'>
              <input type="checkbox" className='' /> Remember me
            </div>
            <div>
              <button className="w-full rounded-md bg-[#3b49df] mt-2 text-md font-medium h-12 text-white">
                Continue with Google
              </button>
            </div>
            <div className='text-center'>
              <a className='text-[#3b49df]'>I forgot my password</a>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
