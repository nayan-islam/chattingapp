import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className='bg-[url("/bg.svg")] bg-cover bg-center h-screen flex items-center px-3'>
      <div className="h-[90%] w-[1320px] md:px-8 mx-auto flex justify-center bg-white bg-opacity-5 rounded-xl shadow-md backdrop-blur-md overflow-hidden">
        <div className="md:w-1/2  h-full flex flex-col justify-center md:items-start items-center lg:pl-40">
          <h1 className="lg:text-3xl text-xl font-bold text-white">
            Login to your account!
          </h1>
          <Link className="text-base text-[#ddd] mt-2 mb-6 border border-white/70 py-3 px-5 rounded-lg">
            <p>
              <i class="fa-brands fa-google"></i> Login with Google
            </p>
          </Link>
          <div className="flex flex-col">
            <fieldset className="border border-white/75 pb-2 px-2 mb-5">
              <legend className="px-2 text-xs text-white/70">
                Email Address
              </legend>
              <input
                className="bg-transparent ring-0 border-0 outline-none px-2 text-white"
                type="email"
                placeholder="Youraddres@email.com"
              />
            </fieldset>

            <fieldset className="border border-white/75 pb-2 px-2">
              <legend className="px-2 text-xs text-white/70">Password</legend>
              <input
                className="bg-transparent ring-0 border-0 outline-none px-2 text-white"
                type="password"
                placeholder="Enter your password"
              />
            </fieldset>
            <input
              className="py-2 bg-blue-300 hover:bg-blue-600 hover:text-white transition-all duration-200  w-full mt-5 mb-7 rounded cursor-pointer"
              type="button"
              value="Login to Continue"
            />
          </div>
          <p className="text-base text-white/70">
            Don’t have an account ?{" "}
            <span className="text-red-500 cursor-pointer">
              <Link to="/registration">Sign up</Link>
            </span>
          </p>
        </div>
        <div className="w-1/2 hidden md:block bg-[url('/rgbg.png')] bg-auto md:bg-contain bg-no-repeat bg-left h-full"></div>
      </div>
    </div>
  );
};

export default Login;
