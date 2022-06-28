import { types, destroy, Instance, IAnyStateTreeNode } from "mobx-state-tree";
import { Product } from "./Product";

export type ProductType = Instance<typeof Product>;

export const CartEntry = types
  .model("CartEntry", {
    count: 0,
    product: Product,
  })
  .views((self) => ({
    get price() {
      return Number(self.product.price) * self.count;
    },
  }))
  .actions((self) => ({
    increaseCount() {
      self.count += 1;
    },
    decreaseCount() {
      if (self.count > 1) {
        self.count -= 1;
      }
    },
  }));

export const CartStore = types
  .model("CartStore", {
    entries: types.optional(types.array(CartEntry), []),
  })
  .views((self) => ({
    get totalPrice() {
      return self.entries.reduce((acc, curr) => acc + curr.price, 0);
    },
    get totalCount() {
      return self.entries.reduce((acc, curr) => acc + curr.count, 0);
    },
  }))
  .actions((self) => ({
    addProduct(product: ProductType) {
      let entry = self.entries.find((entry) => entry.product.id === product.id);
      if (!entry) {
        self.entries.push({ product: product });
        entry = self.entries[self.entries.length - 1];
      }
      entry.increaseCount();
    },
    removeProduct(product: IAnyStateTreeNode) {
      destroy(product);
    },

    clear() {
      self.entries.clear();
    },
    checkout() {
      alert(`Куплено товаров на сумму ${self.totalPrice}!`);
      self.entries.clear();
    },
  }));
