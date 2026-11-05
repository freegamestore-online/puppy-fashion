import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { PetDressUp } from "./PetDressUp";

const button = (label: string) => screen.getByRole("button", { name: new RegExp(label) });

describe("PetDressUp", () => {
  it("lets sunglasses be worn together with a hat", () => {
    render(<PetDressUp />);
    fireEvent.click(button("Top Hat"));
    fireEvent.click(button("Sunnies"));
    expect(button("Top Hat")).toHaveTextContent("ON");
    expect(button("Sunnies")).toHaveTextContent("ON");
  });

  it("still allows only one item per slot", () => {
    render(<PetDressUp />);
    fireEvent.click(button("Top Hat"));
    fireEvent.click(button("Beret"));
    expect(button("Top Hat")).not.toHaveTextContent("ON");
    expect(button("Beret")).toHaveTextContent("ON");
  });

  it("does not use the hamsa emoji for pearls", () => {
    render(<PetDressUp />);
    expect(button("Pearls")).not.toHaveTextContent("🪬");
  });
});
