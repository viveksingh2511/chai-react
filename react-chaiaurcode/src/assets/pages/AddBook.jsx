import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../features/booksSlice'; // update path as needed

function AddBook() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    published: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addBook(formData)); // Send to Redux

    setMessage('Book added successfully!');
    setFormData({ title: '', author: '', genre: '', published: '' });
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Add a New Book</h3>
      {message && <div className="alert alert-success">{message}</div>}
      <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            name="title"
            className="form-control"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Author</label>
          <input
            type="text"
            name="author"
            className="form-control"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Genre</label>
          <input
            type="text"
            name="genre"
            className="form-control"
            value={formData.genre}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Published Date</label>
          <input
            type="date"
            name="published"
            className="form-control"
            value={formData.published}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
