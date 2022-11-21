import { createSlice } from '@reduxjs/toolkit';
import {
  getContacts,
  addContact,
  deleteContact,
  updateContact,
} from './operations';

export const contactsSlice = createSlice({
  name: 'phonebook',
  initialState: [],
  extraReducers: builder => {
    builder
      .addCase(getContacts.fulfilled, (_, action) => {
        return action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        console.log(state);
        state.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        console.log(action.meta.arg);
        console.log(state);
        state = state.filter(({ id }) => id !== action.meta.arg);
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        console.log(action.payload);
        console.log(state);
        //   state = state.filter(({ id }) => id !== action.payload.id);
      });
  },
});
