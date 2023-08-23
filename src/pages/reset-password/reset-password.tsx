import React from "react";
import Header from "../../components/app-header/app-header";
import styles from "./reset-password.module.css";
import { PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postRefreshPassword } from "../../store/actions/reset-password";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function ResetPassword() {
  const [value, setValue] = React.useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [password, setPassword] = React.useState('');
  const [token, setToken] = React.useState('');


  const onClick = () => {
    const setPassword = ({
      'password': password,
      'token': token
    });
    // console.log(resetPassword);
    dispatch(postRefreshPassword(setPassword))
    //@ts-ignore
    .then((path)=>{
      navigate(path);
    })
  };

  //@ts-ignore
  const statePasswordForgotten = useSelector(state => state.forgotPassword.isSuccess);
  // console.log(statePasswordForgotten);

  useEffect(() => {
    if (!statePasswordForgotten) {
      navigate('/forgot-password');
    };
  }, [statePasswordForgotten]);




  return (
    <>
      <Header />
      <div className={styles.reset}>
        <h3 className={`${styles.textEnter} text text_type_main-medium`}>
          Восстановление пароля
        </h3>
        <PasswordInput value={password} name={"password"} extraClass="mt-6"  onChange={(e) => setPassword(e.target.value)} />
        <Input
          type={"text"}
          placeholder={"Введите код из письма"}
          value={token}
          name={"name"}
          error={false}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="mt-6"
          onChange={(e) => setToken(e.target.value)}
        />
        <Button
          htmlType="button"
          type="primary"
          size="large"
          extraClass={`${styles.button} mt-6`}
          onClick={onClick}
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
