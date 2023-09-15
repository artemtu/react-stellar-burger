import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./my-order-page.module.css";
import { useAppDispatch, useAppSelector } from "../../store/types";
import FeedPage from "../../components/feed-id-modal/feed-id-modal";
import { fetchMyFeed } from "../../store/actions/feed-user-orders";
import MyOrderIdModal from "../../components/my-order-id-modal/my-order-id-modal";

function MyOrderPage() {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const feedData = useAppSelector((state) => state.myOrders.getMyFeed);

  console.log(feedData);

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
