import React from "react";
import Header from "../../components/app-header/app-header";
import styles from "./profile.module.css";
import { PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../store/actions/get-profile-info";


function Profile() {
  const [value, setValue] = React.useState();
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const infoProfile = useSelector((state) => state.profileInfo.profileInfo.user)
 
  
  return (
    <>
      <Header />
      <div className={styles.profile}>
        <Input
          type={"text"}
          placeholder={"Имя"}
          value={infoProfile ? infoProfile.name : ""}
          name={"name"}
          error={false}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="mt-6"
          icon={'EditIcon'}
        />
        <EmailInput extraClass="mt-6"   value={infoProfile ? infoProfile.email : ""}  icon={'EditIcon'} />
        <PasswordInput value={value}  icon={'EditIcon'} extraClass="mt-6" />
      </div>
      <div className={styles.LeftMenu}>
        <Link className='text text_type_main-medium text_color_active' style={{ textDecoration: 'none' ,color:'white' }}>Профиль</Link>
        <Link className='text text_type_main-medium text_color_inactive' style={{ textDecoration: 'none' }}>История заказов</Link>
        <Link className='text text_type_main-medium text_color_inactive' style={{ textDecoration: 'none' }}>Выход</Link>
        <p className='text text_type_main-small'>В этом разделе вы можете изменить свои персональные данные</p>
      </div>
    </>
  );
}

export default Profile;
