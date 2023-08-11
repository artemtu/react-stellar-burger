import React from "react";
import Header from "../../components/app-header/app-header";
import styles from "./reset-password.module.css";
import { PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function ResetPassword() {
  const [value, setValue] = React.useState();

  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = React.useState();

  // const onClick = () => {
  //   const resetPassword = ({
  //     'email': email,
  //   });
  //   dispatch(postResetPassword(resetPassword))
  //   .then(resetPassword => {
  //     history.push('/reset-password');
  //   });

  // };




  return (
    <>
      <Header />
      <div className={styles.reset}>
        <h3 className={`${styles.textEnter} text text_type_main-medium`}>
          Восстановление пароля
        </h3>
        <PasswordInput value={value} name={"password"} extraClass="mt-6" />
        <Input
          type={"text"}
          placeholder={"Введите код из письма"}
          value={value}
          name={"name"}
          error={false}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="mt-6"
        />
        <Button
          htmlType="button"
          type="primary"
          size="large"
          extraClass={`${styles.button} mt-6`}
        >
          Сохранить
        </Button>
        <p className="text text_type_main-small text_color_inactive mt-20">
          {" "}
          Вспомнили пароль? <Link to="#">Войти </Link>{" "}
        </p>
 
      </div>
    </>
  );
}

export default ResetPassword;
