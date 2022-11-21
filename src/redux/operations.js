import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const response = await axios.post(`/users/signup`, credentials);
    token.set(response.data.token);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const login = createAsyncThunk('auth/login', async credentials => {
  try {
    const response = await axios.post(`/users/login`, credentials);
    token.set(response.data.token);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const checkCurrentUser = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    // console.log(thunkAPI);

    if (state.auth.token === null) {
      // console.log('No token in storage');
      return thunkAPI.rejectWithValue();
    }

    token.set(state.auth.token);

    try {
      const response = await axios.get(`/users/current`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post(`/users/logout`);
    token.unset();
  } catch (error) {
    console.log(error);
  }
});

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async () => {
    const response = await axios.get(`/contacts`);
    return response.data;
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async newContact => {
    const response = await axios.post(`/contacts`, newContact);
    return response.data;
  }
);
