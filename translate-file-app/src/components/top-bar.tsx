import { BsSearch, BsFillCloudHazeFill } from 'react-icons/bs';

export default function TopBar() {
  return (
    <div className="fixed flex justify-between items-center w-full top-0 left-0 right-0 h-14 py-2 bg-white z-0  ">
      {/* left */}
      <div className="flex-1 items-center pr-5 ">
        <div className="flex mr-3 ml-7 flex-nowrap">
          <a href="#" className="h-9 w-6 mr-2">
            <BsFillCloudHazeFill className="h-9 w-6" />
          </a>
          <div
            style={{
              border: '1px solid gray',
              borderRadius: '5px',
            }}
            className="flex flex-row items-center justify-between focus-within:text-gray-600
            h-9 pr-5 ml-4"
          >
            <input
              placeholder="Search......."
              style={{ outline: 'none' }}
              className=" pr-3 ml-3"
            />
            <a>
              <BsSearch />
            </a>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="flex-1 items-center  mr-8 ">
        <div className="flex flex-row justify-end">
          <div className=""></div>
          <button className=" mr-12 ">
            <a>Login</a>
          </button>
          <button
            className=" h-9 px-5 rounded-lg "
            style={{
              border: '1px solid rgb(108,118,231)',
            }}
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}
