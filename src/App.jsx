import React from "react";
import Registration from "./page/Registration";
import { Route, Routes } from "react-router-dom";
import Login from "./page/Login";
import Home from "./page/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" index element={<Home />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
};

export default App;
