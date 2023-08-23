import React from "react";
import { Ingridients } from "../burger-ingredients";
import { useSelector } from "react-redux";
import { useDrag } from "react-dnd";
import styles from "./ingredient-list.module.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { IbunConstructorProps } from "../../burger-constructor/bun-bottom-constructor/bun-bottom-constructor";
import { IopenModal } from "../../burger-constructor/extraction/extraction";

 type IngredientListProps = IbunConstructorProps & {
  setIngredientModal: React.Dispatch<React.SetStateAction<IngredientModalState>>;
};

export type IngredientModalState = {
  open: boolean;
  id?: number | null;
};


export function IngredientList({ setIngredientModal, data } : IngredientListProps) {
  const navigate = useNavigate();

  // const handleIngredientClick = (id) => {
  //   navigate(`/ingredients/${id}`);
  //   setIngredientModal(true);
  // };

  return (
    <div className={styles.ingridientContainer}>
      {data.map((item) => (
        <Ingridients
          id={item._id}
          key={item._id}
          image={item.image}
          name={item.name}
          price={item.price}
          type={item.type}
          setIngredientModal={setIngredientModal}
          // onClick={() => handleIngredientClick(item._id)}
        />
      ))}
    </div>
  );
}

// IngredientList.propTypes = {
//   data: PropTypes.array.isRequired,
//   setIngredientModal: PropTypes.func.isRequired,
// };
export default IngredientList;
