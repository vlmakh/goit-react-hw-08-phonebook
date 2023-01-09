import { createSlice } from '@reduxjs/toolkit';
import {
  getContacts,
  addContact,
  deleteContact,
  updateContact,
} from './operations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  extraReducers: builder => {
    builder
      .addCase(getContacts.fulfilled, (_, action) => {
        return action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.findIndex(
          contact => contact.id === action.payload.id
        );
        state.splice(index, 1);
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        const index = state.findIndex(
          contact => contact.id === action.payload.id
        );
        state.splice(index, 1, action.payload);
      });
  },
});
