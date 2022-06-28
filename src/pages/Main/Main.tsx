import React from "react";
import { OrderPanel } from "./components/OrderPanel/OrderPanel";
import { ProductList } from "./components/ProductList/ProductList";

export function Main() {
  return (
    <>
      <OrderPanel />
      <ProductList />
    </>
  );
}
