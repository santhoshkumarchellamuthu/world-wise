import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Price from "./Price";
import Product from "./Product";
import Login from "./Login";
import Wise from "./Wise";
import City from "./City";
import CityInfo from "./CityInfo";
import Details from "./Details";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PostProvider, useData } from "./PostProvider";
import Form from "./Form";

const App = () => {
  return (
    <PostProvider>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Home />}></Route>
            <Route path="/Price" element={<Price />}></Route>
            <Route path="/Product" element={<Product />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Wise" element={<ProtectedWise />}>
              <Route path="City" element={<City />}></Route>
              <Route path="City/Details/:id" element={<Details />}></Route>
              <Route path="CityInfo" element={<CityInfo />}></Route>
              <Route path="Form" element={<Form />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </PostProvider>
  );
};

const ProtectedWise = () => {
  const { user } = useData();
  return user ? <Wise /> : <Navigate to="/Login" />;
};

export default App;
