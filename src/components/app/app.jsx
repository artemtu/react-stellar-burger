import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import Header from "../app-header/app-header";
import Main from "../main/main";
import Modal from "../modal/modal";
import IngredientDetails from "../modal/ingredient-details/ingredient-details";
import OrderDetails from "../modal/order-details/orderdetails";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom";
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
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route exact path="/reset-password" component={ResetPassword} />
        <Route exact path="/profile" element={<onlyAuth component={Profile} />} />
        <Route exact path="/profile/orders" component={ProfileOrders} />
        <Route component={NotFound404} /> 

        </Switch>
        
    

     


    </Router>
  );
}

export default App;
