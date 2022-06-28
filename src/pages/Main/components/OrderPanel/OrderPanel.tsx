import React from "react";
import { inject, observer } from "mobx-react";
import { Button } from "../../../../components/Button/Button";
import { ArrowIcon, TrashIcon } from "../../../../assets/icons";
import "./OrderPanel.scss";

export const OrderPanel = inject("store")(
  observer(({ store: { cart } }: any) => { // не разобрался, как типизировать
    const ROOT_CLASS = "order-panel";

    return (
      <div className="order-panel">
        <span>Всего: {cart.totalPrice} ₽</span>
        <div className={`${ROOT_CLASS}__list`}>
          {cart.entries.map((item: any) => (
            <div className={`${ROOT_CLASS}__list-item`} key={item.product.id}>
              <span>{item.product.name}</span>
              <span>Количество: {item.count}</span>
              <div className={`${ROOT_CLASS}__icon-list`}>
                <Button onButtonClick={item.increaseCount}>
                  <ArrowIcon className={`${ROOT_CLASS}__icon`} />
                </Button>
                <Button
                  isDisabled={!(item.count > 1)}
                  onButtonClick={item.decreaseCount}
                >
                  <ArrowIcon
                    className={`${ROOT_CLASS}__icon ${ROOT_CLASS}__icon_rotated`}
                  />
                </Button>
                <Button onButtonClick={() => cart.removeProduct(item)}>
                  <TrashIcon className={`${ROOT_CLASS}__icon`} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  })
);
