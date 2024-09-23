import MockAdapter from "axios-mock-adapter"
import axios from "axios";

import { renderWithContext, screen, waitFor } from "~/test-utils/renderWithContext"
import DashboardPage from "."
import { ENDPOINTS } from "~/constants/endpoints";
import { mockDb } from "~/test-utils/fixtures/mock-db";

const axiosMock = new MockAdapter(axios);

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe("Pages -> Dashboard", () => {
  beforeEach(() => {
    axiosMock.onGet(ENDPOINTS.GET_REGISTRATIONS).reply(200, mockDb);
  })
  it("Should successfully render dashboard and its collumns", async () => {
    renderWithContext(<DashboardPage />)

    expect(screen.getByText(/Pronto para revisar/i)).toBeInTheDocument();
    expect(screen.getByText(/Aprovado/i)).toBeInTheDocument();
    expect(screen.getByText(/Reprovado/i)).toBeInTheDocument();

    await waitFor(() => expect(screen.getByText(/filipe marins/i)).toBeInTheDocument());

    expect(screen.getByText(/filipe marins/i)).toBeInTheDocument();
  })
})