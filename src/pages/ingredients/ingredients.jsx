import React, { useEffect } from "react";
import Header from "../../components/app-header/app-header";
import IngredientDetails from "../../components/modal/ingredient-details/ingredient-details";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchIngredients } from "../../store/actions/fetch-data";

function IngredientPage() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchIngredients(id));
  }, [dispatch, id]);

  const ingredient = useSelector((state) =>
    state.mainData.data.find((item) => item._id === id)
  );

  return (
    <>
      <Header />
      {ingredient ? <IngredientDetails id={id} /> : <p>Loading...</p>}
    </>
  );
}

export default IngredientPage;
