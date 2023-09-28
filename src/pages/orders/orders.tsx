import React from "react";
import Header from "../../components/app-header/app-header";
import { Link } from "react-router-dom";
import styles from "./orders.module.css";
import { useLocation } from "react-router-dom";
import OrdersHistory from "../orders-history/orders-history";
import { useState } from "react";
import Modal from "../../components/modal/modal";
import MyOrderIdModal from "../../components/my-order-id-modal/my-order-id-modal";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/types";
import { WSS_OPEN, WSS_CLOSE } from "../../store/actions/actions";
import { GET_MY_FEED } from "../../store/actions/actions";
import { socketUrl } from "../../store/socketMiddleware";
// import { fetchMyFeed } from "../../store/actions/feed-user-orders";

function ProfileOrders() {
  const location = useLocation();
  const [isOrderIddModal, setIsOrderIddModal] = useState({
    open: false,
    id: "1",
  });

  const myFeedData = useAppSelector((state) => state.myOrders.getMyFeed);
  const dispatch = useAppDispatch();

  let accessToken = localStorage.getItem("accessToken");

  if (accessToken && accessToken.startsWith("Bearer ")) {
    accessToken = accessToken.slice(7);
  }
  const socketUrlPrivate = `wss://norma.nomoreparties.space/orders?token=${accessToken}`;

  console.log(accessToken);

  useEffect(() => {
    if (!accessToken) {
      console.error("No access token is available");
      return;
    }

    dispatch({
      type: WSS_OPEN,
      meta: {
        socket: {
          event: "INIT",
          uri: socketUrlPrivate,
          actionTypes: { message: GET_MY_FEED },
        },
      },
    });

    return () => {
      dispatch({
        type: WSS_CLOSE,
        meta: {
          socket: {
            event: "CLOSE",
            uri: socketUrlPrivate,
          },
        },
      });
    };
  }, [dispatch, accessToken, socketUrlPrivate]);

  if (!myFeedData) {
    return <p>Loading...</p>;
  }

  function closeModal() {
    setIsOrderIddModal({ open: false, id: "1" });
  }

  return (
    <>
      <div className={styles.LeftMenu}>
        <Link
          className={`text text_type_main-medium ${
            location.pathname === "/orders" ? "" : "text_color_inactive"
          }`}
          to="/profile"
          style={{ textDecoration: "none" }}
        >
          Профиль
        </Link>
        <Link
          className={`text text_type_main-medium `}
          style={{ textDecoration: "none" }}
          to="/profile/orders"
        >
          История заказов
        </Link>
        <Link
          className={`text text_type_main-medium ${
            location.pathname === "/orders" ? "" : "text_color_inactive"
          }`}
          style={{ textDecoration: "none" }}
          to="/logout"
        >
          Выход
        </Link>
        <p className="text text_type_main-small">
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <div>
        <OrdersHistory setIsOrderIddModal={setIsOrderIddModal} />
      </div>
      {isOrderIddModal.open && (
        <Modal closeModal={closeModal}>
          <MyOrderIdModal id={isOrderIddModal.id} />
        </Modal>
      )}
    </>
  );
}

export default ProfileOrders;
