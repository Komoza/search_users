import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import { Search } from '../components/search/search';
import { Provider } from 'react-redux';
import store from '../store/store';

test('Check input field', () => {
  render(
      <Provider store={store}>
          <Search />
      </Provider>
  );
  const searchButton = screen.getByPlaceholderText('Введите логин');
  expect(searchButton).toBeInTheDocument();
});

test('Check search button', () => {
    render(
        <Provider store={store}>
            <Search />
        </Provider>
    );
    const searchButton = screen.getByText('Найти');
    expect(searchButton).toBeInTheDocument();
});

test('Check sorting text', () => {
  render(
    <Provider store={store}>
        <Search />
    </Provider>
);
const searchButton = screen.getByText('Сортировка:');
expect(searchButton).toBeInTheDocument();
})
