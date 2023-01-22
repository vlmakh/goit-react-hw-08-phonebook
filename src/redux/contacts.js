import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from './operations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = 'Loading contacts...';
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        return {
          ...state,
          items: [...action.payload],
          isLoading: null,
        };
      })
      .addCase(fetchContacts.rejected, state => {
        state.isLoading = null;
      })
      .addCase(addContact.pending, state => {
        state.isLoading = 'Adding contact...';
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isLoading = null;
      })
      .addCase(addContact.rejected, state => {
        state.isLoading = null;
      })
      .addCase(deleteContact.pending, state => {
        state.isLoading = 'Deleting contact...';
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        return {
          items: [
            ...state.items.filter(contact => contact.id !== action.payload.id),
          ],
          isLoading: null,
        };
      })
      .addCase(deleteContact.rejected, state => {
        state.isLoading = null;
      })
      .addCase(updateContact.pending, state => {
        state.isLoading = 'Updating contact...';
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
        state.isLoading = null;
      })
      .addCase(updateContact.rejected, state => {
        state.isLoading = null;
      });
  },
});
