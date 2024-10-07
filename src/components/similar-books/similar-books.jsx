import React from 'react';
import style from "./style.module.scss";

export const Similar_books = ({ data, title }) => {
    // Faqat 3 ta elementni olish
    const displayedData = data.slice(2);

    return (
        <div className={style.Similar_books}>
            <h2>Ўхшаш китоблар</h2>
            <div className={style.Similar_books__items}>
                {
                    displayedData.map((item, index) => {
                        return (
                            <div key={index} className={style.NewProducts__item}>
                                <img src={item.img} alt="img" />
                                <div className={style.NewProducts__item__div}>
                                    <div className={style.NewProducts__item__info}>
                                        <h4>{item.disc}</h4>
                                        <p>{item.title}</p>
                                    </div>
                                    <div className={style.NewProducts__item__bottom}>
                                        <div className={style.NewProducts__item__bottom__left}>
                                            <img src={item.star} alt="" />
                                            <p>{item.reting}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <button>Кўпроқ</button>
        </div>
    )
}
