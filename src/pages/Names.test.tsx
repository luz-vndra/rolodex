import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Names from "./Names";

const mockUsers = [
  { id: 1, name: "Jone Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Alex Johnson" },
];

describe("Names Page", () => {

  beforeEach(() => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue({
      json: async () => mockUsers,
    } as Response)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  const renderComponent = () => {
    render(<MemoryRouter><Names /></MemoryRouter>)
  }

  it("fetches and displays names", async () => {
    renderComponent()

    await waitFor(() => {
      expect(screen.getByText("Jone Doe")).toBeInTheDocument()
      expect(screen.getByText("Jane Smith")).toBeInTheDocument()
      expect(screen.getByText("Alex Johnson")).toBeInTheDocument()
    })
  })

  it("does not filter for small names", async () => {
    const user = userEvent.setup()
    renderComponent()

    await screen.findByText("Jone Doe")

    const input = screen.getByPlaceholderText("Search names")
    await user.type(input, "jo")

    expect(screen.getByText("Jane Smith")).toBeInTheDocument()
  })

  it("filters for moree that 3 characters", async () => {
    const user = userEvent.setup()
    renderComponent()

    await screen.findByText("Jone Doe")

    const input = screen.getByPlaceholderText("Search names")
    await user.type(input, "Alex")

    expect(screen.getByText("Alex Johnson")).toBeInTheDocument()
    expect(screen.queryByText("Jone Doe")).not.toBeInTheDocument()
    
  })

});
