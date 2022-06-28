import React from "react";
import { mockData } from "../../../../mockData";
import { inject, observer } from "mobx-react";
import { RootStoreModel } from "../../../../stores";
import "./ProductList.scss";

export const ProductList = inject("store")(
  observer(({ store: { cart } }: any) => {
    // не разобрался, как типизировать
    const ROOT_CLASS = "product-list";

    return (
      <div className={ROOT_CLASS}>
        {mockData.map((item) => (
          <div
            className={`${ROOT_CLASS}__item`}
            key={item.id}
            onClick={() => cart.addProduct(item)}
          >
            <img
              className={`${ROOT_CLASS}__item-img`}
              src={item.img}
              alt="picture"
            />
            <span className={`${ROOT_CLASS}__item-text`}>{item.name}</span>
            <span className={`${ROOT_CLASS}__item-text`}>{item.price} ₽</span>
          </div>
        ))}
      </div>
    );
  })
);
