import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import Header from "../app-header/app-header";
import Main from "../main/main";
import Modal from "../modal/modal";
import IngredientDetails from "../modal/ingredient-details/ingredient-details";
import OrderDetails from "../modal/order-details/orderdetails";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../pages/home/home";
import Login from "../../pages/login/login";

function App() {
  return (
    <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />

    </Router>
  );
}

export default App;
