import React from "react";
import text from "./appheader.css";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";

function Header() {
  return (
    <header className="header p-4">
      <div className="test">
        <a href="#" className="header__link pl-5 pr-5">
          <BurgerIcon type="primary" />
          <p className="text text_type_main-default pl-2 pr-2"> Конструктор</p>
        </a>
        <a href="#" className="header__link ml-2 pl-5 pr-5">
          <ListIcon type="secondary" />
          <p className="text text_type_main-default text_color_inactive pr-2 pl-2">
            {" "}
            Лента заказов
          </p>
        </a>
      </div>

      <div className="lel">
        <Logo />
      </div>

      <a href="#" className="header__link pl-5 pr-5">
        <ProfileIcon type="secondary" />
        <p className="text text_type_main-default text_color_inactive pr-2 pl-2">
          {" "}
          Личный кабинет
        </p>
      </a>
    </header>
  );
}

export default Header;
