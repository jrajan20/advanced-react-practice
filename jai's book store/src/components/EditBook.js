import React, { useState } from "react";
import uuid from "react-uuid";

const EditBook = (props) => {
  const { open, book, updateBook } = props;
  const [error, setError] = useState("");
  const [editedBook, setEditedBook] = useState(book);

  const handleInput = (type, value) => {
    let newBook = book;
    newBook[type] = value;
    setEditedBook(newBook);
  };

  const handleSubmit = () => {
    let newBook = editedBook;
    if (newBook.name && newBook.price) {
      updateBook(newBook);

      open(false);
    } else {
      setError("Please enter a book name and price!");
    }
  };
  return (
    <div>
      <div
        className="close-modal"
        onClick={() => {
          setEditedBook({});
          open(false);
        }}
      >
        &#x274C;
      </div>
      <div className="modal-header">
        <p className="modal-title">Edit Book</p>
      </div>
      <div className="enter-details-box">
        <label className="detail-input">
          Name:{" "}
          <input
            type="text"
            name="name"
            defaultValue={book.name}
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
            defaultValue={book.author}
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
            defaultValue={book.category}
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
            defaultValue={book.price}
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
            defaultValue={book.description}
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
            setEditedBook({});
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
          Update
        </div>
      </div>
    </div>
  );
};
export default EditBook;
