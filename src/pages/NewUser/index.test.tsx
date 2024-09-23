import { renderWithContext, screen } from "~/test-utils/renderWithContext"
import NewUserPage from "."

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe("Pages -> New User", () => {
  it("Should render page", () => {
    renderWithContext(<NewUserPage />)

    expect(screen.getByLabelText("submit")).toHaveTextContent(/cadastrar/i);
    expect(true).toBe(true);
  })
})