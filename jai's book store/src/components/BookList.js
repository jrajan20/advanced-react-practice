import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import uuid from "react-uuid";

import AddBook from "./AddBook";
import EditBook from "./EditBook";
import "./booklist.css";

import { addBookAction, deleteBookAction, updateBookAction } from "../redux";

const customStyles = {
  content: {
    width: "950px",

    minHeight: "720px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#f2f2f2",
    borderRadius: "25px",
    padding: "0",
  },
};

export default () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const [selectedBook, setSelectedBook] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);

  return (
    <div className="book-list-container">
      <div
        className="add-book-button-main"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Add a Book
      </div>
      <Modal isOpen={openModal} style={customStyles}>
        <AddBook
          open={setOpenModal}
          addNewBook={(book) => dispatch(addBookAction(book))}
        />
      </Modal>
      <Modal isOpen={openEditModal} style={customStyles}>
        <EditBook
          open={setOpenEditModal}
          book={selectedBook}
          updateBook={(book) => dispatch(updateBookAction(book))}
        />
      </Modal>

      <div className="book-list">
        <table>
          <tbody>
            {" "}
            <tr>
              <td>
                <p className="column-title">Name</p>
              </td>
              <td>
                <p className="column-title">Author</p>
              </td>
              <td>
                <p className="column-title">Category</p>
              </td>
              <td>
                <p className="column-title">Description</p>
              </td>
              <td>
                <p className="column-title">Price ($)</p>
              </td>
              <td></td>
            </tr>
            {books.map((book) => (
              <tr id={book.id}>
                <td>
                  <p
                    className="name-select"
                    onClick={() => {
                      setSelectedBook(book);
                      setOpenEditModal(true);
                    }}
                  >
                    {book.name}
                  </p>
                </td>
                <td>
                  <p>{book.author}</p>
                </td>
                <td>
                  <p>{book.category}</p>
                </td>
                <td>
                  <p>{book.description}</p>
                </td>
                <td>
                  <p>{Number(book.price).toFixed(2)}</p>
                </td>
                <td>
                  <div
                    className="delete-button"
                    onClick={() => {
                      dispatch(deleteBookAction(book.id));
                    }}
                  >
                    Delete
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
