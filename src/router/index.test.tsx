import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { AppRoutes } from "."
import routes from "./routes";

jest.mock("~/pages/Dashboard", () => () => (<div>mock dashboard</div>));
jest.mock("~/pages/NewUser", () => () => (<div>mock newUser</div>));

describe("Router component", () => {
  it("Should render dashboard component", () => {
    render(
      <MemoryRouter initialEntries={[routes.dashboard]}>
        <AppRoutes />
      </MemoryRouter>
    )

    expect(screen.getByText(/mock dashboard/i)).toBeInTheDocument();
  })

  it("Should render newUser component", () => {
    render(
      <MemoryRouter initialEntries={[routes.newUser]}>
        <AppRoutes />
      </MemoryRouter>
    )

    expect(screen.getByText(/mock newUser/i)).toBeInTheDocument();
  })

  it("Should redirect to dashboard if page is not specified", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <AppRoutes />
      </MemoryRouter>
    )

    expect(screen.getByText(/mock dashboard/i)).toBeInTheDocument();
  })
})