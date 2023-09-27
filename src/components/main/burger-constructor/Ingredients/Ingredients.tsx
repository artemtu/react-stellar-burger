import { REMOVE_INGREDIENT } from "../../../../store/actions/actions";
import { useDrag, useDrop } from "react-dnd";
import { changeIngredient } from "../../../../store/actions/add-remove";
import { IingredientFullInfo } from "../../main";
import { useAppDispatch, useAppSelector } from "../../../../store/types";

import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ingredients.module.css";
import { IIngredient } from "../../../../store/reducers/constructor-reducer";

type Props = {
  data: IIngredient[];
};

function Ingredients({ data }: Props) {
  const dispatch = useAppDispatch();

  const handleRemoveIngredient = (_constId: string) => {
    dispatch({ type: REMOVE_INGREDIENT, payload: _constId });
  };

  return (
    <div className={`${styles.list} custom-scroll`}>
      {data.map((item, index) => (
        <DraggableIngredient
          key={item._constId}
          data={item}
          index={index}
          onRemove={handleRemoveIngredient}
        />
      ))}
    </div>
  );
}

interface IDraggableIngredientProps {
  data: IIngredient;
  index: number;
  onRemove: (id: string, index?: number) => void;
}

interface IHoverProps {
  ingredient: {
    _id: string;
    _constId: string;
  };
}

function DraggableIngredient({
  data,
  onRemove,
  index,
}: IDraggableIngredientProps) {
  const dispatch = useAppDispatch();

  const ingredientsArray = useAppSelector(
    (store) => store.constructorBurger.constructorBurger.ingredients
  );

  interface Styles {
    constructor: string;
  }

  const findIndex = (item: string) => ingredientsArray.indexOf(item as any);

  const [{ isDragging }, dragRef] = useDrag({
    type: "sort",
    item: { ingredient: data },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: "sort",
    hover({ ingredient }: IHoverProps) {
      if (ingredient._constId === data._constId) return;
      dispatch(
        changeIngredient({
          //@ts-ignore
          indexFrom: findIndex(ingredient),
          indexTo: index,
          ingredient: ingredient,
        })
      );
    },
  });

  return (
    <div
      ref={(node) => dragRef(dropRef(node))}
      className={styles.constructorBurger}
    >
      <DragIcon type="primary" />
      <ConstructorElement
        // className="items"
        text={data.name}
        price={data.price}
        thumbnail={data.image}
        handleClose={() => onRemove(data._constId as string)}
      />
    </div>
  );
}

export default Ingredients;
