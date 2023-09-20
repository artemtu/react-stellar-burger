import React from "react";
import styles from "./app-header.module.css";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../store/types";

function Header() {
  const location = useLocation();
  const isAuthChecked = useAppSelector(
    (state) => state.loginUser.isAuthChecked
  );
  const profileOrLogin = isAuthChecked ? "/profile" : "/login";

  return (
    <header className={`${styles.header} p10`}>
      <div className={styles.test}>
        <Link to="/" className={`${styles.header__link} pl-5 pr-5`}>
          <BurgerIcon
            type={location.pathname === "/" ? "primary" : "secondary"}
          />
          <p
            className={`text_type_main-default ${
              location.pathname === "/" ? "" : "text_color_inactive"
            } pr-2 pl-2`}
          >
            {" "}
            Конструктор
          </p>
        </Link>

        <Link to="/feed" className={`${styles.header__link} pl-5 pr-5`}>
          <ListIcon
            type={location.pathname === "/feed" ? "primary" : "secondary"}
          />
          <p
            className={`text_type_main-default ${
              location.pathname === "/feed" ? "" : "text_color_inactive"
            } pr-2 pl-2`}
          >
            {" "}
            Лента заказов
          </p>
        </Link>
      </div>

      <div className={styles.logo}>
        <Logo />
      </div>

      <Link to={profileOrLogin} className={`${styles.header__link} pl-5 pr-5`}>
        <ProfileIcon
          type={location.pathname === "/login" ? "primary" : "secondary"}
        />
        <p
          className={`text_type_main-default ${
            location.pathname === "/login" ? "" : "text_color_inactive"
          } pr-2 pl-2`}
        >
          {" "}
          Личный кабинет
        </p>
      </Link>
    </header>
  );
}

export default Header;
