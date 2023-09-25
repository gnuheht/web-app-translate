import React from 'react';
import { BsSearch, BsFillCloudHazeFill } from 'react-icons/bs';

export default function Header({children} ?: React.ReactNode) {
  return (
    <div>
      <div className="fixed flex items-center w-full top-0 left-0 right-0 h-14 py-2 bg-white">
      {/* left */}
        <div className="flex grow justify-center">
          <a href="#" className="w-1/6 flex justify-end items-center">
            <BsFillCloudHazeFill className=" w-9 h-7" />
          </a>
          <div
            style={{
              border: '1px solid gray',
              borderRadius: '5px',
            }}
            className="flex flex-row items-center justify-between focus-within:text-gray-600
              h-9 pr-5 ml-4 w-3/6"
          >
            <input
              placeholder="Search......."
              style={{ outline: 'none' }}
              className="w-full ml-4"
            />
            <a>
              <BsSearch />
            </a>
          </div>
        </div>
        {/* right */}
        <div className="flex grow justify-center mr-5">
          <button
            className=" h-9 px-5 rounded-lg mr-4 "
            style={{
              border: '1px solid rgb(108,118,231)',
            }}
          >
            <a>Login</a>
          </button>
          <button
            className=" h-9 px-5 rounded-lg "
            style={{
              border: '1px solid rgb(108,118,231)',
            }}
          >
            <a>Create Account</a>
          </button>
        </div>
      </div>
    </div>
  );
}
