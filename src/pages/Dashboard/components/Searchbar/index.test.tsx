import { renderWithContext, screen } from "~/test-utils/renderWithContext"
import { SearchBar } from "."
import userEvent from "@testing-library/user-event"
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { ENDPOINTS } from "~/constants/endpoints";
import { mockDb } from "~/test-utils/fixtures/mock-db";
import routes from "~/router/routes";

const axiosMock = new MockAdapter(axios);

const mockPush = jest.fn();
jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockPush,
  }),
}));


describe("SearchBar", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    axiosMock.resetHistory();
    axiosMock.onGet(ENDPOINTS.GET_REGISTRATIONS).reply(200, mockDb);
  });

  it("Should properly input values on CPF searchbar", async () => {
    renderWithContext(<SearchBar />);

    const input = screen.getByLabelText("search") as HTMLInputElement;
    
    await userEvent.type(input, "13906522709");
    expect(input.value).toBe("139.065.227-09");
  });

  it("Should refetch data once refetch button has been clicked", async () => {
    renderWithContext(<SearchBar />);

    const button = screen.getByLabelText("refetch");
    await userEvent.click(button);

    expect(axiosMock.history.get.length).toBe(1);
  })

  it("Should go to new admission page once button has been clicked", async () => {
    renderWithContext(<SearchBar />);

    const button = screen.getByLabelText(/admission page/);
    await userEvent.click(button);

    expect(mockPush).toHaveBeenCalledWith(routes.newUser);
  })
})