import React, { useState } from "react";
import uuid from "react-uuid";

const AddBook = (props) => {
  const [book, setBook] = useState({});
  const [error, setError] = useState("");

  const { open, addNewBook } = props;

  const handleInput = (type, value) => {
    let newBook = book;
    newBook[type] = value;
    setBook(newBook);
  };

  const handleSubmit = () => {
    let newBook = book;
    if (newBook.name && newBook.price) {
      newBook.id = uuid();
      addNewBook(newBook);
      setBook({});
      open(false);
    } else {
      setError("Please enter a name and price to add the book!");
    }
  };
  return (
    <div>
      <div
        className="close-modal"
        onClick={() => {
          setBook({});
          open(false);
        }}
      >
        &#x274C;
      </div>
      <div className="modal-header">
        <p className="modal-title">Add a New Book:</p>
      </div>
      <div className="enter-details-box">
        <label className="detail-input">
          Name:{" "}
          <input
            type="text"
            name="name"
            onChange={(e) => {
              handleInput(e.target.name, e.target.value);
            }}
          />
        </label>
        <label className="detail-input">
          Author:{" "}
          <input
            type="text"
            name="author"
            onChange={(e) => {
              handleInput(e.target.name, e.target.value);
            }}
          />
        </label>
      </div>
      <div className="enter-details-box">
        <label className="detail-input">
          Category:{" "}
          <input
            type="text"
            name="category"
            onChange={(e) => {
              handleInput(e.target.name, e.target.value);
            }}
          />
        </label>
        <label className="detail-input">
          Price: $
          <input
            className=""
            type="number"
            name="price"
            onChange={(e) => {
              handleInput(e.target.name, e.target.value);
            }}
          />
        </label>
      </div>
      <div className="enter-desc-box">
        <label>
          <p>Description:</p>
          <textarea
            className="des-input"
            type="text"
            name="description"
            onChange={(e) => {
              handleInput(e.target.name, e.target.value);
            }}
          />
        </label>
      </div>
      {error ? <div className="error-box">{error}</div> : null}
      <div className="buttons-container">
        <div
          className="cancel-button"
          onClick={() => {
            setBook({});
            open(false);
          }}
        >
          Cancel
        </div>
        <div
          className="add-book-button"
          onClick={() => {
            handleSubmit();
          }}
        >
          Add Book
        </div>
      </div>
    </div>
  );
};
export default AddBook;
