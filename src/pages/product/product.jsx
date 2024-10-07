import React from "react";
import { Information } from "../../components/information/information";
import datas from "../../data/data";
import { Similar_books } from "../../components/similar-books/similar-books";
import { Item_discription } from "../../components/item_discription/item_discription";

export const Product = () => {
    return (
        <div className="container">
            <Item_discription />
            <div className="datas_book">
                <Information />
                <Similar_books data={datas.kitob} />
            </div>
        </div>
    )
}