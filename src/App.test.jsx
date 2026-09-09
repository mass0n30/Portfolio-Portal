import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";

describe("portfolio homepage", () => {
  it("renders the hero, skills, and projects on the default route", () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });

    render(<RouterProvider router={router} />);

    expect(
      screen.getByRole("heading", { name: /masson \| full-stack developer/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: /headshot illustration for masson/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /skills/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /featured projects/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: /portfolio portal/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: /project tracker/i }),
    ).toBeInTheDocument();
  });
});
