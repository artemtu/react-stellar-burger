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
import { OnlyAuth, UnAuth } from "../../protected-route/protected-route";
import IngredientPage from "../../pages/ingredients/ingredients";
import { useAppDispatch } from "../../store/types";
import { fetchIngredients } from "../../store/actions/fetch-data";
import Feed from "../../pages/feed/feed";
import FeedPage from "../modal/feed-id/feed-id";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchIngredients());
    };

    fetchData();
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UnAuth component={<Login />} />} />
        <Route path="/register" element={<UnAuth component={<Register />} />} />
        <Route
          path="/forgot-password"
          element={<UnAuth component={<ForgotPassword />} />}
        />
        <Route
          path="/reset-password"
          element={<UnAuth component={<ResetPassword />} />}
        />
        {/* <Route path="/reset-password"  element={<ResetPassword/>} /> */}
        <Route path="/profile" element={<OnlyAuth component={<Profile />} />} />
        <Route
          path="/profile/orders"
          element={<OnlyAuth component={<ProfileOrders />} />}
        />
        <Route path="/logout" element={<OnlyAuth component={<Profile />} />} />
        <Route path="/ingredients/:id" element={<IngredientPage />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/feedId" element={<FeedPage />} /> 
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </>
  );
}

export default App;
