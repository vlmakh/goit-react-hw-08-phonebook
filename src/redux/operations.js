import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const register = createAsyncThunk('auth/register', async credentials => {
  const response = await axios.post(`/users/signup`, credentials);
  return response.data;
});

export const login = createAsyncThunk('auth/register', async credentials => {
  const response = await axios.post(`/users/login`, credentials);
  return response.data;
});

export const logout = createAsyncThunk('auth/register', async () => {
  const response = await axios.post(`/users/logout`);
  return response.data;
});

export const getContacts = createAsyncThunk('auth/register', async () => {
  const response = await axios.get(`/contacts`);
  return response.data;
});
