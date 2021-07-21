import { render, screen } from "@testing-library/react";

import Navbar from "../navbar";

test("renders learn react link", () => {
    render(<Navbar />);
    const titleElement = screen.getByText(/What's in my fridge?/i);
    expect(titleElement).toBeInTheDocument();
});
