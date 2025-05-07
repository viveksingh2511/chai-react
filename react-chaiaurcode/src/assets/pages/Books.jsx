import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook, editBook } from '../../features/booksSlice';

function Books() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const [editing, setEditing] = useState(null);
  const [editData, setEditData] = useState({
    title: '',
    author: '',
    genre: '',
    published: '',
  });

  const startEdit = (book) => {
    setEditing(book.id);
    setEditData(book);
  };

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    dispatch(editBook(editData));
    setEditing(null);
  };

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <div className="container mt-4">
      <h3>Books List</h3>
      {books.length === 0 ? (
        <p>No books added yet.</p>
      ) : (
        <table className="table table-bordered table-striped">
          <thead className="table-light">
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Genre</th>
              <th>Published</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                {editing === book.id ? (
                  <>
                    <td><input name="title" value={editData.title} onChange={handleEditChange} className="form-control" /></td>
                    <td><input name="author" value={editData.author} onChange={handleEditChange} className="form-control" /></td>
                    <td><input name="genre" value={editData.genre} onChange={handleEditChange} className="form-control" /></td>
                    <td><input type="date" name="published" value={editData.published} onChange={handleEditChange} className="form-control" /></td>
                    <td>
                      <button onClick={handleSave} className="btn btn-success btn-sm me-2">Save</button>
                      <button onClick={() => setEditing(null)} className="btn btn-secondary btn-sm">Cancel</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.genre}</td>
                    <td>{book.published}</td>
                    <td>
                      <button onClick={() => startEdit(book)} className="btn btn-warning btn-sm me-2">Edit</button>
                      <button onClick={() => handleDelete(book.id)} className="btn btn-danger btn-sm">Delete</button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Books;
