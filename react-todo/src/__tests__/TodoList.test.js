// src/__tests__/TodoList.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList.js";

test("renders initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Build a project")).toBeInTheDocument();
});

test("adds a new todo", async () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText("Add todo");
  await userEvent.type(input, "Test Todo");
  const addButton = screen.getByText("Add");
  await userEvent.click(addButton);
  expect(screen.getByText("Test Todo")).toBeInTheDocument();
});

test("toggles a todo completion", async () => {
  render(<TodoList />);
  const todo = screen.getByText("Learn React");
  await userEvent.click(todo);
  expect(todo).toHaveStyle("text-decoration: line-through");
});

test("deletes a todo", async () => {
  render(<TodoList />);
  const todo = screen.getByText("Learn React");
  const deleteButton = screen.getAllByText("Delete")[0];
  await userEvent.click(deleteButton);
  expect(todo).not.toBeInTheDocument();
});
