import React, { useEffect } from "react";
import Header from "../../components/app-header/app-header";
import IngredientDetails from "../../components/modal/ingredient-details/ingredient-details";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchIngredients } from "../../store/actions/fetch-data";
import styles from "./feed-id-page.module.css";
import FeedPage from "../../components/modal/feed-id/feed-id";

function FeedIdPage() {
  const { id } = useParams();

//   const ingredient = useSelector((state) =>
//     state.mainData.data.find((item) => item._id === id)
//   );

  const orders = useSelector((state) => state.getFeed.getFeed.orders.find((item) => item._id === id));

  return (
    <>
      <div className={styles.page}>
        {orders ? <FeedPage id={id} /> : <p>Loading...</p>}
      </div>
    </>
  );
}

export default FeedIdPage;
