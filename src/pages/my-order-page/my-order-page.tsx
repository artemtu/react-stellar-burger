import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./my-order-page.module.css";
import { useAppDispatch, useAppSelector } from "../../store/types";
import MyOrderIdModal from "../../components/my-order-id-modal/my-order-id-modal";
import { socketUrl } from "../../store/socketMiddleware";
import { WSS_OPEN, WSS_CLOSE } from "../../store/actions/actions";
import { GET_MY_FEED } from "../../store/actions/actions";

function MyOrderPage() {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const feedData = useAppSelector((state) => state.myOrders.getMyFeed.success);
  let accessToken = localStorage.getItem("accessToken");

  if (accessToken && accessToken.startsWith("Bearer ")) {
    accessToken = accessToken.slice(7);
  }
  const socketUrlPrivate = accessToken
    ? `${socketUrl}?token=${accessToken}`
    : socketUrl;

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

  if (!feedData) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.page}>
      <MyOrderIdModal id={id} />
    </div>
  );
}

export default MyOrderPage;
