import React from "react";
import Registration from "./page/Registration";
import { Route, Routes } from "react-router-dom";
import Login from "./page/Login";
import Home from "./page/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" index element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
      </Routes>
    </>
  );
};

export default App;
