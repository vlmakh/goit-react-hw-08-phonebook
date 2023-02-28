import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterChange: (_, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

export const { filterChange } = filterSlice.actions;
