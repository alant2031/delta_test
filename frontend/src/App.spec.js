// import { test, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import App from "./App";
import { MemoryRouter } from "react-router-dom";
import React from "react";

const createRouterWrapper =
	(history) =>
	({ children }) =>
		<Router history={history}>{children}</Router>;

describe("App Navbar", () => {
	test("There is a navbar", () => {
		render(<App />, { wrapper: MemoryRouter });
		const el = screen.getByTestId("navbar-comp");
		expect(el).toBeInTheDocument();
	});

	test("There is a Delta Logo on the left", () => {
		render(<App />, { wrapper: MemoryRouter });
		const el = screen.getByTestId("logo");
		expect(el).toBeInTheDocument();
	});
	test("There is a container with 3 links on the right", () => {
		render(<App />, { wrapper: MemoryRouter });
		const el = screen.getByTestId("links");
		const els = screen.getAllByTestId("link");
		expect(el).toBeInTheDocument();
		expect(els.length).toBe(3);
	});
});

describe("App pages navigation", () => {
	test("Home", () => {
		render(<App />, { wrapper: MemoryRouter });
		const el = screen.getByTestId("home-comp");
		expect(el).toBeInTheDocument();
	});
	test("Students", async () => {
		const history = createMemoryHistory();
		render(<App />, { wrapper: createRouterWrapper(history) });
		const user = userEvent.setup();
		const link = screen.getByText("students");
		await user.click(link);
		const el = screen.getByTestId("students-comp");
		expect(el).toBeInTheDocument();
	});
	test("About", async () => {
		const history = createMemoryHistory();
		render(<App />, { wrapper: createRouterWrapper(history) });
		const user = userEvent.setup();
		const link = screen.getByText("about");
		await user.click(link);
		const el = screen.getByTestId("about-comp");
		expect(el).toBeInTheDocument();
	});

	test("Return to Home", async () => {
		const history = createMemoryHistory();
		render(<App />, { wrapper: createRouterWrapper(history) });
		const user = userEvent.setup();
		const aboutLink = screen.getByText("about");
		const homeLink = screen.getByText("home");
		await user.click(aboutLink);
		const aboutPage = screen.getByTestId("about-comp");
		expect(aboutPage).toBeInTheDocument();

		await user.click(homeLink);
		const homePage = screen.getByTestId("home-comp");
		expect(homePage).toBeInTheDocument();
	});
});
