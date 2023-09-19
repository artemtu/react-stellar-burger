import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./my-order-page.module.css";
import { useAppDispatch, useAppSelector } from "../../store/types";
import MyOrderIdModal from "../../components/my-order-id-modal/my-order-id-modal";

function MyOrderPage() {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const feedData = useAppSelector((state) => state.myOrders.getMyFeed.success);

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
