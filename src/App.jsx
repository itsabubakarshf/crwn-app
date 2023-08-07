import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import NavBar from "./components/Navigation";
import "./App.scss";
const App = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<NavBar/>} >
        <Route path="/home" index element={<Home/>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
