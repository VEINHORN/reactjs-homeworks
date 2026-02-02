import { describe, it, expect } from "vitest";
import cartReducer, { addToCart, removeFromCart } from "./cartSlice";
import type { CartState } from "../../types/cartStateType";

describe("cart slice", () => {
  const initialState: CartState = {
    itemsById: {},
  };

  it("should handle initial state", () => {
    expect(cartReducer(undefined, { type: "unknown" })).toEqual({
      itemsById: {},
    });
  });

  describe("addToCart", () => {
    it("should add a new item to the cart", () => {
      const action = addToCart({ id: "1", itemsCount: 2 });
      const newState = cartReducer(initialState, action);
      expect(newState.itemsById).toEqual({ "1": 2 });
    });

    it("should increment the quantity of an existing item", () => {
      const state: CartState = {
        itemsById: { "1": 1 },
      };
      const action = addToCart({ id: "1", itemsCount: 1 });
      const newState = cartReducer(state, action);
      expect(newState.itemsById).toEqual({ "1": 2 });
    });
  });

  describe("removeFromCart", () => {
    it("should decrement the quantity of an item", () => {
      const state: CartState = {
        itemsById: { "1": 3 },
      };
      const action = removeFromCart({ id: "1" });
      const newState = cartReducer(state, action);
      expect(newState.itemsById).toEqual({ "1": 2 });
    });

    it("should remove the item if the quantity becomes zero", () => {
      const state: CartState = {
        itemsById: { "1": 1 },
      };
      const action = removeFromCart({ id: "1" });
      const newState = cartReducer(state, action);
      expect(newState.itemsById).toEqual({});
    });

    it("should do nothing if the item is not in the cart", () => {
      const action = removeFromCart({ id: "2" });
      const newState = cartReducer(initialState, action);
      expect(newState.itemsById).toEqual({});
    });
  });
});
