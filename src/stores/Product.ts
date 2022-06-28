import { types } from "mobx-state-tree";

export const Product = types.model("Product", {
  id: types.identifierNumber,
  name: types.string,
  price: types.string,
  img: types.string
});
