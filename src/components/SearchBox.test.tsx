import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBox from "../components/SearchBox";

describe("SearchBox", () => {
  it("renders input with placeholder", () => {
    render(<SearchBox searchTerm="" setSearchTerm={vi.fn()} />);

    expect(screen.getByPlaceholderText("Search names")).toBeInTheDocument();
  });

  it("displays passed search term", () => {
    render(<SearchBox searchTerm="john" setSearchTerm={vi.fn()} />);

    expect(screen.getByDisplayValue("john")).toBeInTheDocument();
  });

  it("calls setSearchTerm when user types", async () => {
    const user = userEvent.setup()

    const mockSetSearchTerm = vi.fn()

    render(<SearchBox searchTerm="" setSearchTerm={mockSetSearchTerm} />)

    const input = screen.getByPlaceholderText("Search names")

    await user.type(input, "alex")
    
    expect(mockSetSearchTerm).toHaveBeenCalled()

  });
});
