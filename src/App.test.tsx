import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import App from "./App";

vi.mock("./components/Header/Header", () => ({
  default: () => <div>Header</div>,
}));

vi.mock("./components/Footer/Footer", () => ({
  default: () => <div>Footer</div>,
}));

describe("App component", () => {
  it("renders Header, Outlet content, and Footer", () => {
    const router = createMemoryRouter(
      [
        {
          path: "/",
          element: <App />,
          children: [
            {
              index: true,
              element: <div>Outlet Content</div>,
            },
          ],
        },
      ],
      {
        initialEntries: ["/"],
      },
    );

    render(<RouterProvider router={router} />);

    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(screen.getByText("Outlet Content")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });
});
