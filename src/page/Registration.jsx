import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import { Blocks } from "react-loader-spinner";

const Registration = () => {
  const auth = getAuth();
  let navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [fullName, setFullName] = useState("");
  let [password, setPassword] = useState("");

  let [emailerr, setEmailerr] = useState("");
  let [fullNameerr, setFullNameerr] = useState("");
  let [passworderr, setPassworderr] = useState("");
  let [passwordShow, setPasswordShow] = useState(false);
  let [success, setSuccess] = useState(false);
  let [loading, setLoading] = useState(false);

  let handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailerr("");
  };

  let handleFullName = (e) => {
    setFullName(e.target.value);
    setFullNameerr("");
  };

  let handlePassword = (e) => {
    setPassword(e.target.value);
    setPassworderr("");
  };

  let handleSubmit = () => {
    if (!email) {
      setEmailerr("Email is required");
    } else {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email)) {
        setEmailerr("You have entered an invalid email address!");
      }
    }
    if (!fullName) {
      setFullNameerr("FullName is required");
    }
    if (!password) {
      setPassworderr("Password is required");
    }
    // else {
    //   if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password)) {
    //     setPassworderr(
    //       "Password must be 6-20 characters consisting of numbers, uppercase and lowercase letters!"
    //     );
    //   }
    // }
    if (
      email &&
      fullName &&
      password &&
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email)
    ) {
      setLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          setSuccess("Registration Successful");
          toast.success("Registration Successful! Check your email...", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setEmail("");
          setFullName("");
          setPassword("");
          sendEmailVerification(auth.currentUser);
          setLoading(false);
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        })
        .catch((error) => {
          if (error.code.includes("auth/email-already-in-use")) {
            setEmailerr("Email already in use");
          }
        });
    }
  };

  return (
    <div className='bg-[url("/bg.svg")] bg-cover bg-center h-screen flex items-center px-3'>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="h-[90%] w-[1320px] mx-auto flex justify-center bg-white bg-opacity-5 rounded-xl shadow-md backdrop-blur-md overflow-hidden">
        <div className="w-1/2 hidden md:block bg-[url('/rgbg.webp')] bg-cover bg-center h-full"></div>
        <div className="md:w-1/2  h-full flex flex-col justify-center md:items-end items-center md:pr-16 lg:pr-40">
          {success ? (
            <h1 className="md:text-3xl text-2xl text-center md:text-right font-bold text-green-500">
              {success}
            </h1>
          ) : (
            <h1 className="md:text-3xl text-2xl text-center md:text-right font-bold text-white">
              Get started with easily register
            </h1>
          )}
          <p className="text-base text-[#ddd] mt-1 mb-6">
            Free register and you can enjoy it
          </p>
          <div className="flex flex-col gap-y-6">
            <div className="relative">
              <fieldset className="border border-white/75 pb-2 px-2">
                <legend className="px-2 text-xs text-white/70">
                  Email Address
                </legend>
                <input
                  className="bg-transparent ring-0 border-0 outline-none px-2 text-white"
                  type="email"
                  onChange={handleEmail}
                  value={email}
                />
              </fieldset>
              <p className="absolute bottom-[-2px] right-0 translate-y-full text-xs text-red-500 font-semibold">
                {emailerr}
              </p>
            </div>
            <div className="relative">
              <fieldset className="border border-white/75 pb-2 px-2">
                <legend className="px-2 text-xs text-white/70">
                  Full name
                </legend>
                <input
                  className="bg-transparent ring-0 border-0 outline-none px-2 text-white"
                  type="text"
                  onChange={handleFullName}
                  value={fullName}
                />
              </fieldset>
              <p className="absolute bottom-[-2px] right-0 translate-y-full text-xs text-red-500 font-semibold">
                {fullNameerr}
              </p>
            </div>
            <div className="relative">
              <fieldset className="border border-white/75 pb-2 px-2 relative">
                <legend className="px-2 text-xs text-white/70">Password</legend>
                <input
                  className="bg-transparent ring-0 border-0 outline-none px-2 text-white"
                  type={passwordShow ? "text" : "password"}
                  onChange={handlePassword}
                  value={password}
                />

                {passwordShow ? (
                  <IoMdEye
                    onClick={() => setPasswordShow(!passwordShow)}
                    className="absolute right-4 top-[5px] text-white/60 cursor-pointer"
                  />
                ) : (
                  <IoMdEyeOff
                    onClick={() => setPasswordShow(!passwordShow)}
                    className="absolute right-4 top-[5px] text-white/60 cursor-pointer"
                  />
                )}
              </fieldset>
              <p className="absolute bottom-[-2px] right-0 translate-y-full text-xs text-red-500 font-semibold">
                {passworderr}
              </p>
            </div>
            {loading ? (
              <div className="flex justify-center">
                <Blocks
                  visible={true}
                  height="72"
                  width="72"
                  ariaLabel="blocks-loading"
                  wrapperStyle={{}}
                  wrapperClass="blocks-wrapper"
                />
              </div>
            ) : (
              <input
                className="py-3 bg-blue-400  w-full mt-5 mb-7 rounded cursor-pointer"
                type="button"
                value="Sign up"
                onClick={handleSubmit}
              />
            )}
          </div>
          <p className="text-base text-white/70">
            Already have an account ?{" "}
            <span className="text-red-500 cursor-pointer">
              <Link to="/login">Sign in</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
