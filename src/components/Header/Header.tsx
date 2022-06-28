import React from "react";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";
import { CartIcon, LogoIcon } from "../../assets/icons";
import "./Header.scss";

export const Header = inject("store")(
  observer(({ store: { cart } }: any) => { // не разобрался, как типизировать
    const ROOT_CLASS = "header";

    return (
      <header className={ROOT_CLASS}>
        <div className={`${ROOT_CLASS}__icon-list`}>
          <Link to="/">
            <LogoIcon />
          </Link>
          <Link to="/cart">
            <CartIcon className={`${ROOT_CLASS}__icon`} />
          </Link>
        </div>
        <span>Всего товаров выбрано: {cart.totalCount}</span>
      </header>
    );
  })
);
