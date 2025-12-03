import { render, screen, fireEvent,  } from "@testing-library/react";
import Subscribe from "./Subscribe";
import '@testing-library/jest-dom/vitest';

// src/setupTests.ts
import '@testing-library/jest-dom/vitest';

test("shows error if the email is invalid", () => {
  render(<Subscribe />);

  const input = screen.getByPlaceholderText(/Enter your email address/i);
  const button = screen.getByRole("button", { name: /Contact Us/i });

  fireEvent.change(input, { target: { value: "not-an-email" } });
  fireEvent.click(button);

  expect(screen.getByText(/Whoops, make sure it’s an email/i)).toBeInTheDocument();
});

test("does not show error if the email is valid", () => {
  render(<Subscribe />);

  const input = screen.getByPlaceholderText(/Enter your email address/i);
  const button = screen.getByRole("button", { name: /Contact Us/i });

  fireEvent.change(input, { target: { value: "toni@example.com" } });
  fireEvent.click(button);

  expect(screen.queryByText(/Whoops/i)).not.toBeInTheDocument();
});