import { createSlice } from '@reduxjs/toolkit';
import { getContacts, addContact } from './operations';

// export const contactsSlice = createSlice({
//   name: 'phonebook',
//   initialState: [],
//   extraReducers: {
//     [getContacts.fulfilled](state, action) {
//       console.log(action.payload);
//       return action.payload;
//     },
//   },
// });

export const contactsSlice = createSlice({
  name: 'phonebook',
  initialState: [],
  extraReducers: builder => {
    builder.addCase(getContacts.fulfilled, (_, action) => {
      return action.payload;
    });
    builder.addCase(addContact.fulfilled, (state, action) => {
      console.log(action.payload);
      state.push(action.payload);
    });
  },
});
