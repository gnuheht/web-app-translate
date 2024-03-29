import React from 'react';
import { BsSearch, BsFillCloudHazeFill } from 'react-icons/bs';
import { useForm } from 'react-hook-form';

export type LogForm = {
  username: string;
  password: string;
  confirmPassword?: string;
};

type LogProp = {
  page: "Login" | "Sign Up"
}

function LogLayout({page}: LogProp)  {
  const action = page === 'Login' ? 'Continue' : 'Sign Up';

  // const emailPattern =
  //   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm<LogForm>();

  const onClickSubmit = (data: LogForm) => {
    const {confirmPassword, ...postForm} = data;

    console.log(data);
  }; 
  
  return (
    <div className='
    mt-14'>
      <div className="flex flex-col justify-center items-center w-full mb-6 ">
      <div
        className=" w-max border rounded-lg
       border-gray-400 bg-white "
      >
        {/* button up */}
        <div className="text-center w-full h-full">
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
              Have a password? Continue with your account
            </span>
          </div>
        </div>
        {/* form down */}
        <div className="flex flex-col w-full justify-center items-center h-72">
          <form action="" className='w-9/1'
            onSubmit={handleSubmit((data : LogForm) => onClickSubmit(data))}>
            <div className='w-full'>
              <label htmlFor="" className='w-full'>Username</label>
              <input type="username" className='w-full border border-gray-500 rounded-md p-1 pl-1'
              {...register("username", {
                required:"Username chưa được nhập",
                
              })}
              />
              <p>{errors?.username?.message}</p>
            </div>
            <div className='w-full'>
              <label htmlFor="" className='w-full'>Password</label>
              <input type="password" className='w-full border border-gray-500 rounded-md p-1' 
              {...register("password", {
                required: "Password chưa được nhập",
                minLength : 
                  page === "Login" 
                  ? {
                      value : 6,
                      message : "Pass cần có ít nhất 6 kí tự"
                    } : undefined
              })}
              />
              <p>{errors?.password?.message}</p>
            </div>
            {page === 'Sign Up' &&(
              <div className='w-full'>
              <label htmlFor="" className='w-full'>Confirm Password</label>
              <input type="password" className='w-full border border-gray-500 rounded-md p-1' 
              {...register("confirmPassword", {
                required: "Không để trống",
                validate : {
                  passwordEqual : value => 
                  value === getValues().password || 
                  "Password chưa trùng nhau" 
                }
              })}
              />
              <p>{errors?.confirmPassword?.message}</p>
            </div>
            ) }
            <div className='w-full'>
              <input type="checkbox" className='' /> Remember me
            </div>
            <div>
              <button 
              type='submit'
              className="w-full rounded-md bg-[#3b49df] mt-2 text-md font-medium h-12 text-white">
                {page}
              </button>
            </div>
            <div className="text-center">
              <a className="text-[#3b49df]">I forgot my password</a>
            </div>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
}

export default LogLayout;
