import IngredientDetails from "../../components/modal/ingredient-details/ingredient-details";
import { useParams } from "react-router-dom";
import styles from "./ingredients.module.css";
import { useAppSelector } from "../../store/types";

function IngredientPage() {
  const { id } = useParams();

  const ingredient = useAppSelector((state) =>
    (state.mainData as any).data.find((item) => item._id === id)
  );

  return (
    <>
      <div className={styles.page}>
        {/* @ts-ignore */}
        {ingredient ? <IngredientDetails id={id} /> : <p>Loading...</p>}
      </div>
    </>
  );
}

export default IngredientPage;
