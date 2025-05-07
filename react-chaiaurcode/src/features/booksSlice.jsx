import { createSlice } from '@reduxjs/toolkit';

const booksSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    addBook: (state, action) => {
      state.push({ id: Date.now(), ...action.payload });
    },
    editBook: (state, action) => {
      const index = state.findIndex(book => book.id === action.payload.id);
      if (index !== -1) state[index] = action.payload;
    },
    deleteBook: (state, action) => {
      return state.filter(book => book.id !== action.payload);
    }
  }
});

export const { addBook, editBook, deleteBook } = booksSlice.actions;
export default booksSlice.reducer;
