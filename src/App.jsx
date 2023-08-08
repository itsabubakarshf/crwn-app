import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import NavBar from "./components/Navigation";
import "./App.scss";
import Shope from "./components/Shope";
import SignIn from "./routes/signIn";
import Contact from "./components/Contact";
const App = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<NavBar/>} >
        <Route index element={<Home/>} />
        <Route path="/shop" element={<Shope/>} />
        <Route path="/sign-in" element={<SignIn/>} />
        <Route path="/contact" element={<Contact/> } />

        </Route>
      </Routes>
    </>
  );
};

export default App;
