import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import Header from "../app-header/app-header";
import Main from "../main/main";
import Modal from "../modal/modal";
import IngredientDetails from "../modal/ingredient-details/ingredient-details";
import OrderDetails from "../modal/order-details/orderdetails";
import PropTypes from "prop-types";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/home";
import Login from "../../pages/login/login";
import Register from "../../pages/register/register";
import ForgotPassword from "../../pages/forgot-password/forgot-password";
import ResetPassword from "../../pages/reset-password/reset-password";
import NotFound404 from "../../pages/not-found-404/not-found-404";
import Profile from "../../pages/profile/profile";
import ProfileOrders from "../../pages/orders/orders";
import {onlyAuth, OnlyUnAuth} from '../../protected-route/protected-route'




function App() {
  return (
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/forgot-password" element={<ForgotPassword/>} />
        <Route exact path="/reset-password" element={<ResetPassword/>} />
        <Route exact path="/profile" element={<Profile/>} />
        <Route exact path="/profile/orders" element={<ProfileOrders/>} />
        <Route component={NotFound404} /> 

    </Routes>
  );
}

export default App;
