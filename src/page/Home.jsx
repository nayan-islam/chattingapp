import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="left w-[11%] bg-slate-300 h-screen px-4 py-6">
            <Link>
                <img src="/logo.png" alt="" />
            </Link>
        </div>
        <div className="right w-[88%] bg-slate-600 h-screen"></div>
      </div>
    </>
  );
};

export default Home;
