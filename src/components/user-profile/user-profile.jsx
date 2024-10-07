import React from 'react'
import style from "./style.module.scss"
import user from "../../assets/userProfile.svg"

export const UserProfile = () => {
  return (
    <div className={style.user}>
        <div className={style.user__img}>
            <img src={user} alt="user-img" />
        </div>
        <div className={style.user__info}>
            <h2>Суғдиёна Икромова</h2>
            <p>+998 90 253 77 53</p>
            <p>ID: 0001  Баланс: 45 000 сўм</p>
        </div>
    </div>
  )
}
