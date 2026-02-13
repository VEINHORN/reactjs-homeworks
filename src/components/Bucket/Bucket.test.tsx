import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { createMemoryRouter, MemoryRouter } from "react-router-dom";
import createMockStore from "redux-mock-store";
import Bucket from "./Bucket";
import { RouterProvider } from "react-router";

const mockStore = createMockStore([]);

describe("Bucket component", () => {
  it("renders the correct number of items in the bucket", () => {
    const store = mockStore({
      cart: {
        itemsById: {
          "1": 2,
          "2": 3,
        },
      },
    });

    const router = createMemoryRouter(
      [
        {
          path: "/",
          element: <Bucket />,
        },
      ],
      {
        initialEntries: ["/"],
      },
    );

    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>,
    );

    const cartCount = screen.getByText("5");
    expect(cartCount).toBeInTheDocument();
  });
});
