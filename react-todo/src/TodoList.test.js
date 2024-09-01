import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

test('renders Todo List heading', () => {
  render(<TodoList />);
  const headingElement = screen.getByText(/Todo List/i);
  expect(headingElement).toBeInTheDocument();
});

test('adds a new todo', () => {
  render(<TodoList />);
  const inputElement = screen.getByPlaceholderText(/Add a new todo/i);
  const addButton = screen.getByText(/Add Todo/i);

  fireEvent.change(inputElement, { target: { value: 'New Todo' } });
  fireEvent.click(addButton);

  const newTodoElement = screen.getByText(/New Todo/i);
  expect(newTodoElement).toBeInTheDocument();
});

test('toggles todo completion', () => {
  render(<TodoList />);
  const todoElement = screen.getByText(/Learn React/i);
  fireEvent.click(todoElement);

  expect(todoElement).toHaveStyle('text-decoration: line-through');
});

test('deletes a todo', () => {
  render(<TodoList />);
  const deleteButton = screen.getByText(/Delete/i);
  fireEvent.click(deleteButton);

  const todoElement = screen.queryByText(/Learn React/i);
  expect(todoElement).not.toBeInTheDocument();
});
