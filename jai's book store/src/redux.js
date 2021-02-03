import { createStore } from "redux";
import uuid from "react-uuid";
import _ from "lodash";

const initialState = {
  books: [
    {
      id: uuid(),
      name: "The Food Lab",
      author: "J. Kenji Lopez-Alt",
      price: 51.16,
      category: "Food",
      description:
        "The book contains close to 300 savoury American cuisine recipes. The Food Lab expands on Lopez-Alt's 'The Food Lab' column on the Serious Eats blog. ",
    },
  ],
};

export const store = createStore(
  reducer,
  initialState,
  window.devToolsExtension && window.devToolsExtension()
);

function reducer(state, { type, payload }) {
  switch (type) {
    case "ADD_BOOK":
      return { ...state, books: [...state.books, payload] };
    case "DELETE_BOOK":
      return {
        ...state,
        books: _.filter(state.books, (book) => book.id !== payload),
      };
    case "UPDATE_BOOK":
      return {
        ...state,
        books: _.map(state.books, (book) =>
          book.id === payload.id
            ? {
                ...book,
                name: payload.name,
                author: payload.author,
                price: payload.price,
                category: payload.category,
                description: payload.description,
              }
            : book
        ),
      };
    default:
      return state;
  }
}

export const addBookAction = (book) => ({
  type: "ADD_BOOK",
  payload: book,
});

export const deleteBookAction = (bookId) => ({
  type: "DELETE_BOOK",
  payload: bookId,
});

export const updateBookAction = (book) => ({
  type: "UPDATE_BOOK",
  payload: book,
});
