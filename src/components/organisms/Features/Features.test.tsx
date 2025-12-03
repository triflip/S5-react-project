import { render, screen, fireEvent } from "@testing-library/react";
import Features from "./Features";
import { describe, it, expect } from "vitest";

describe("Features Component (Tab Control)", () => {
  it("should change the title and text when a tab is clicked", () => {
    render(<Features />);

    expect(screen.getByRole("heading", { name: /Bookmark in one click/i })).toBeInTheDocument();
    expect(screen.getByText(/Organize your bookmarks however you like/i)).toBeInTheDocument();

    const tab2Button = screen.getByRole("tab", { name: /Speedy Searching/i });
    fireEvent.click(tab2Button);

    expect(screen.getByRole("heading", { name: /Intelligent search/i })).toBeInTheDocument();
    expect(screen.getByText(/Our powerful search feature will help you find saved sites/i)).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: /Bookmark in one click/i })).not.toBeInTheDocument();

    const tab3Button = screen.getByRole("tab", { name: /Easy Sharing/i });
    fireEvent.click(tab3Button);

    expect(screen.getByRole("heading", { name: /Share your bookmarks/i })).toBeInTheDocument();
    expect(screen.getByText(/Easily share your bookmarks and collections with others/i)).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: /Intelligent search/i })).not.toBeInTheDocument();
  });
});
