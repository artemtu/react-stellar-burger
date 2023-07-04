import React from "react";
import tab from "./tab.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

export function TabMenu() {
  const [current, setCurrent] = React.useState("one");
  return (
    <div className="mt-5" style={{ display: "flex" }}>
      <Tab value="one" active={current === "one"} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="two" active={current === "two"} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="three" active={current === "three"} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
  );
}

export default TabMenu;
