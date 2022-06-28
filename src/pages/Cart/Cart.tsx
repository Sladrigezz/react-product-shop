import React from "react";
import { inject, observer } from "mobx-react";
import { Button } from "../../components/Button/Button";
import { TrashIcon } from "../../assets/icons";
import "./Cart.scss";

export const Cart = inject("store")(
  observer(({ store: { cart } }: any) => { // не разобрался, как типизировать
    const ROOT_CLASS = "cart";

    return (
      <div className={ROOT_CLASS}>
        {cart.entries.length ? (
          <>
            <span>Сумма к оплате: {cart.totalPrice} ₽</span>
            <Button
              onButtonClick={cart.checkout}
              className={`${ROOT_CLASS}__button`}
            >
              Заказать
            </Button>
          </>
        ) : (
          <span>Добавьте товары в корзину!</span>
        )}
        <div className={`${ROOT_CLASS}__list`}>
          {cart.entries.map((item: any) => (
            <div
              key={item.product.id}
              className={`${ROOT_CLASS}__list-item list-item`}
            >
              <img className="list-item__image" src={item.product.img} alt="" />
              <span>{item.product.name}</span>
              <span>
                {item.count} шт. за {item.price} ₽
              </span>
              <span>Цена за шт.: {item.product.price} ₽</span>
              <Button onButtonClick={() => cart.removeProduct(item)}>
                <TrashIcon />
              </Button>
            </div>
          ))}
        </div>
        {!!cart.entries.length && (
          <Button onButtonClick={cart.clear}>
            Удалить все товары из корзины
          </Button>
        )}
      </div>
    );
  })
);
