import { describe, it, expect, vi } from "vitest";
import {
  selectOrderItems,
  selectEnrichedOrderItems,
} from "./cartSelectors";
import type { RootState } from "../../types/rootStateType";
import type { Meal } from "../../types/mealType";

vi.mock("../meals/mealsApi", () => ({
  mealsApi: {
    endpoints: {
      getMeals: {
        select: vi.fn(() => () => ({ data: mockMeals })),
      },
    },
  },
}));

describe("cart selectors", () => {
  const mockMeals: Meal[] = [
    {
      id: "1",
      name: "Meal 1",
      price: 10,
      description: "Description 1",
      image: "image1.jpg",
    },
    {
      id: "2",
      name: "Meal 2",
      price: 15,
      description: "Description 2",
      image: "image2.jpg",
    },
  ];

  const mockState: RootState = {
    cart: {
      itemsById: { "1": 2, "2": 1 },
    },
    mealsApi: {
      queries: {},
      mutations: {},
      provided: {},
      subscriptions: {},
      config: {
        online: true,
        focused: true,
        middlewareRegistered: true,
        refetchOnFocus: true,
        refetchOnReconnect: true,
        refetchOnMountOrArgChange: true,
        keepUnusedDataFor: 60,
        reducerPath: "mealsApi",
      },
    },
  };

  describe("selectOrderItems", () => {
    it("should return the itemsById from the cart state", () => {
      const selectedItems = selectOrderItems(mockState);
      expect(selectedItems).toEqual({ "1": 2, "2": 1 });
    });
  });

  describe("selectEnrichedOrderItems", () => {
    it("should return an array of enriched order items", () => {
      const mealsResult = { data: mockMeals };
      const selector = selectEnrichedOrderItems.resultFunc(
        mockState.cart.itemsById,
        mealsResult,
      );

      expect(selector).toEqual([
        {
          id: "1",
          quantity: 2,
          meal: mockMeals[0],
        },
        {
          id: "2",
          quantity: 1,
          meal: mockMeals[1],
        },
      ]);
    });

    it("should return an empty array if there are no items in the cart", () => {
      const mealsResult = { data: mockMeals };
      const selector = selectEnrichedOrderItems.resultFunc({}, mealsResult);
      expect(selector).toEqual([]);
    });

    it("should return an empty array if the meals data is not available", () => {
      const mealsResult = { data: undefined };
      const selector = selectEnrichedOrderItems.resultFunc(
        mockState.cart.itemsById,
        mealsResult,
      );
      expect(selector).toEqual([]);
    });

    it("should not include items that do not have a corresponding meal", () => {
      const stateWithExtraItem = {
        ...mockState,
        cart: {
          itemsById: { ...mockState.cart.itemsById, "3": 1 },
        },
      };
      const mealsResult = { data: mockMeals };
      const selector = selectEnrichedOrderItems.resultFunc(
        stateWithExtraItem.cart.itemsById,
        mealsResult,
      );

      expect(selector).toEqual([
        {
          id: "1",
          quantity: 2,
          meal: mockMeals[0],
        },
        {
          id: "2",
          quantity: 1,
          meal: mockMeals[1],
        },
      ]);
    });
  });
});
