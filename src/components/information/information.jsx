import React from 'react';
import style from "./style.module.scss"

export const Information = () => {
    return (
        <div className={style.infor}>
            <div className={style.benom}>
                <h2 className={style.datas}>Маълумотлар</h2>
                <h2 className={style.comments}>Фикрлар</h2>
            </div>
            <table className={style.book_details_table}>
                <tbody>
                    <tr>
                        <td className={style.datas__title}>Китоб номи</td>
                        <td>Элжернга аталган гуллар</td>
                    </tr>
                    <tr>
                        <td className={style.datas__title}>Муаллиф</td>
                        <td>Даниел КИЗ</td>
                    </tr>
                    <tr>
                        <td className={style.datas__title}>ISBN</td>
                        <td>121341381648 (ISBN13: 121341381648)</td>
                    </tr>
                    <tr>
                        <td className={style.datas__title}>Тил</td>
                        <td>Ўзбек</td>
                    </tr>
                    <tr>
                        <td className={style.datas__title}>Саҳифалар</td>
                        <td>450</td>
                    </tr>
                    <tr>
                        <td className={style.datas__title}>Чоп этилган сана</td>
                        <td>Апрель 7, 1999</td>
                    </tr>
                    <tr>
                        <td className={style.datas__title}>Нашриёт</td>
                        <td>Wepress Inc.</td>
                    </tr>
                    <tr>
                        <td className={style.datas__title}>Рукн</td>
                        <td>
                            <button className={style.tag}>SIYOSAT</button>
                            <button className={style.tag}>СИЁСАТ</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
