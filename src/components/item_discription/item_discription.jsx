import React from 'react';
import style from "./style.module.scss";

export const Item_discription = () => {
    return (
        <div className={style.Item_discription_all}>

            <div>
                <img src="" alt="img" />
            </div>

            <div className={style.itemDescription}>
                <h1 className={style.title}>Элжернга аталган гуллар</h1>
                <p className={style.category}>SIYOSAT, FANTASTIKA</p>
                <div className={style.rating}>
                    <span>4.0</span>
                    <span className={style.stars}>⭐⭐⭐⭐</span>
                    <span>(235 reviews)</span>
                </div>
                <p className={style.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                <div className={style.author}>
                    <span>Мақалатың авторы: Kevin Smiley</span>
                    <span>Werpess Inc., 1999</span>
                </div>
                <div className={style.pricing}>
                    <span className={style.originalPrice}>6 500 тг.</span>
                    <span className={style.discountedPrice}>5 500 тг.</span>
                </div>
                <div className={style.actions}>
                    <button className={style.addToCart}>+ Себетке салу</button>
                    <button className={style.like}>❤️</button>
                </div>
            </div>
        </div>
    );
}
