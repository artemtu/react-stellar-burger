import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./feed-id-page.module.css";
import { useAppDispatch, useAppSelector } from "../../store/types";
import FeedPage from "../../components/feed-id-modal/feed-id-modal";
import { fetchFeed } from "../../store/actions/feed-all-orders";

function FeedPageTest() {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const feedData = useAppSelector((state) => state.getFeed.getFeed);

  useEffect(() => {
    const closeSocket = dispatch(fetchFeed());

    return () => {
      closeSocket();
    };
  }, [dispatch]);

  if (!feedData) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.page}>
      <FeedPage id={id} />
    </div>
  );
}

export default FeedPageTest;
