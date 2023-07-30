

export const getIngredients = (ingredients) => {
  return {
    type: "GET_INGREDIENTS",
    payload: ingredients.data,
  };
};

export const fetchIngredients = () => (dispatch) => {
  // Запрос к серверу для получения данных
  fetch("https://norma.nomoreparties.space/api/ingredients")
    .then((res) => res.json())
    .then((data) => {
      // Сохраняем полученные данные в хранилище Redux
      dispatch(getIngredients(data));
    })
    .catch((error) => {
      console.error("Произошла ошибка при получении данных:", error);
    });
};
