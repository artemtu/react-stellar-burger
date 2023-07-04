import React from "react";
import content from "./main.css";
import { TabMenu } from "../tab/tab";
function Main() {
  return (
    <main className="content">
      <section className="menu-bar mt-10 ">
        <h1 className="text text_type_main-large">Соберите бургер</h1>
        <TabMenu />
      </section>

      {/* вторая часть страницы */}
      <section className="constructor-bar"></section>
    </main>
  );
}

export default Main;
