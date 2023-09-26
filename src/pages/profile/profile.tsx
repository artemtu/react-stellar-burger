import React from "react";
import Header from "../../components/app-header/app-header";
import styles from "./profile.module.css";
import { PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getUser } from "../../store/actions/get-profile-info";
import { patchAuthUser } from "../../components/api/patch-profile";
import { postLogout } from "../../store/actions/logout";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/types";

import { useLocation } from "react-router-dom";

function Profile() {
  const location = useLocation();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();



  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const profileInfo = useAppSelector(
    //@ts-ignore
    (state) => state.profileInfo.profileInfo.user
  );

  useEffect(() => {
    if (profileInfo) {
      setName(profileInfo.name);
      setEmail(profileInfo.email);
    }
  }, [profileInfo]);

  const onClick = () => {
    const updateUserData = {
      email: email,
      password: password,
      name: name,
    };

    patchAuthUser(updateUserData).then((data) => {
      console.log(data);
    });
  };

  const logOut = () => {
    const setLogout = {
      token: localStorage.getItem("refreshToken"),
    };
    dispatch(postLogout(setLogout));
  };

  return (
    <>
      <div className={styles.profile}>
        <Input
          type={"text"}
          placeholder={"Имя"}
          value={name}
          name={"name"}
          error={false}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="mt-6"
          icon={"EditIcon"}
          onChange={(e) => setName(e.target.value)}
        />
        <EmailInput
          extraClass="mt-6"
          value={email}
          // icon={"EditIcon"}
          onChange={(e) => setEmail(e.target.value)}
        />
        <PasswordInput
          value={password}
          icon={"EditIcon"}
          extraClass="mt-6"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className={styles.buttons}>
        <Button htmlType="button" type="secondary" size="small">
          Отмена
        </Button>
        <Button
          htmlType="button"
          type="primary"
          size="small"
          extraClass="ml-2"
          onClick={onClick}
        >
          Сохранить
        </Button>
      </div>
      <div className={styles.LeftMenu}>
        <Link
          className={`text text_type_main-medium ${
            location.pathname === "/profile" ? "" : "text_color_inactive"
          }`}
          style={{ textDecoration: "none" }}
          to="/profile"
        >
          Профиль
        </Link>
        <Link
          className="text text_type_main-medium text_color_inactive"
          to="/profile/orders"
          style={{ textDecoration: "none" }}
        >
          История заказов
        </Link>
        <Link
          className="text text_type_main-medium text_color_inactive"
          style={{ textDecoration: "none" }}
          onClick={logOut}
          to="/logout"
        >
          Выход
        </Link>
        <p className="text text_type_main-small">
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
    </>
  );
}

export default Profile;
