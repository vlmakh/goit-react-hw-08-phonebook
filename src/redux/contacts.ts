import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import { IContact, IContactsState } from 'components/types';
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from './operations';

const initialState: IContactsState = {
  items: [],
  isLoading: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = 'Loading contacts...';
      })
      .addCase(fetchContacts.fulfilled, (state, action: PayloadAction<IContact[]>) => {
        return {
          ...state,
          items: [...action.payload],
          isLoading: null,
        };
      })
      .addCase(addContact.pending, state => {
        state.isLoading = 'Adding contact...';
      })
      .addCase(addContact.fulfilled, (state, action: PayloadAction<IContact>) => {
        state.items.push(action.payload);
        state.isLoading = null;
      })
      .addCase(deleteContact.pending, state => {
        state.isLoading = 'Deleting contact...';
      })
      .addCase(deleteContact.fulfilled, (state, action: PayloadAction<IContact>) => {        
        return {
          items: [
            ...state.items.filter(contact => contact.id !== action.payload.id),
          ],
          isLoading: null,
        };
      })
      .addCase(updateContact.pending, state => {
        state.isLoading = 'Updating contact...';
      })
      .addCase(updateContact.fulfilled, (state, action: PayloadAction<IContact>) => {
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
        state.isLoading = null;
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          updateContact.rejected,
          deleteContact.rejected
        ),
        state => {
          state.isLoading = null;
        }
      );
  },
  reducers: {},
});
