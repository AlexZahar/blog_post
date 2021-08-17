// __tests__/fetch.test.js
import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const server = setupServer(
  rest.get("https://localhost:3004/posts", (req, res, ctx) => {
    return res(
      ctx.json({
        title: "Once upon a time blog post",
        description: "Some Description",
        id: 3,
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("loads and check for the title id", async () => {
  render(
    <Router>
      {" "}
      <HomePage />
    </Router>
  );

  await waitFor(() => screen.getByTestId("title-3"));

  expect(screen.getByTestId("title-3")).toHaveTextContent(
    "Once upon a time blog post"
  );
  // expect(screen.getByRole("button")).toBeDisabled();
});
