import { render, screen } from "@testing-library/react";
import Button from "./Button";
import { describe, it, expect } from "vitest";
import styles from "../Button/Button.module.css";

describe("Button Component (Variants)", () => {
  it("should apply the correct class for each variant", () => {
    render(<Button variant="red">Red</Button>);
    const redButton = screen.getByRole("button", { name: /Red/i });
    expect(redButton).toHaveClass(styles.button);
    expect(redButton).toHaveClass(styles.red);

    render(<Button variant="blue">Blue</Button>);
    const blueButton = screen.getByRole("button", { name: /Blue/i });
    expect(blueButton).toHaveClass(styles.button);
    expect(blueButton).toHaveClass(styles.blue);

    render(<Button variant="white">White</Button>);
    const whiteButton = screen.getByRole("button", { name: /White/i });
    expect(whiteButton).toHaveClass(styles.button);
    expect(whiteButton).toHaveClass(styles.white);

    render(<Button variant="transparent">Transparent</Button>);
    const transparentButton = screen.getByRole("button", { name: /Transparent/i });
    expect(transparentButton).toHaveClass(styles.button);
    expect(transparentButton).toHaveClass(styles.transparent);
  });
});
