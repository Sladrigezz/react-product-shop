import { IModelType, Instance, types } from "mobx-state-tree";
import { CartStore } from "./Cart";

export const RootStore = types.model("RootStore", {
  cart: types.optional(CartStore, {
    entries: [],
  }),
});

export type RootStoreModel = typeof RootStore; 
