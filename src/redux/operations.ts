import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';
import { capitalize } from 'utils/capitalize';
import { IValues, IContact, ICredentials } from 'components/types';

axios.defaults.baseURL = process.env.REACT_APP_MAIN_URL;

const token = {
  set(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
const errorMsg = "Something's wrong. Please update page and try again";

export const register = createAsyncThunk(
  'auth/register',
  async (credentials: ICredentials, thunkAPI) => {
    try {
      const response = await axios.post(`/users/signup`, credentials);
      token.set(response.data.token);
      toast.success(`${response.data.user.name} was registered`);
      return response.data;
    } catch (error) {
      toast.error('Probably such email was alredy registered');
      return thunkAPI.rejectWithValue('');
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials: ICredentials, thunkAPI) => {
    try {
      const response = await axios.post(`/users/login`, credentials);
      token.set(response.data.token);
      return response.data;
    } catch (error) {
      toast.error('There is mistake in login or password, please try again');
      return thunkAPI.rejectWithValue('');
    }
  }
);

export const checkCurrentUser = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    const state: any = thunkAPI.getState();

    if (state.auth.token === null) {
      return thunkAPI.rejectWithValue('');
    }

    token.set(state.auth.token);

    try {
      const response = await axios.get(`/users/current`);
      return response.data;
    } catch (error) {
      toast.error('Please try to login again');
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post(`/users/logout`);
    token.unset();
  } catch (error) {
    toast.error(errorMsg);    
  }
});

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async _ => {
    try {
      const response = await axios.get(`/contacts`);
      return response.data;
    } catch (error) {
      toast.error(errorMsg);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact: IValues) => {
    const contactCapitalized = {
      ...newContact,
      name: capitalize(newContact.name),
    };
    try {
      const response = await axios.post(`/contacts`, contactCapitalized);
      toast.success(`${capitalize(newContact.name)} was added`);
      return response.data;
    } catch (error) {
      toast.error(errorMsg);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contact: Pick<IContact, 'id' | 'name'>) => {
    const { id, name } = contact;
    try {
      const response = await axios.delete(`/contacts/${id}`);
      toast.success(`${name} was deleted`);
      return response.data;
    } catch (error) {
      toast.error(errorMsg);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async (contact: IContact) => {
    const contactCapitalized = {
      ...contact,
      name: capitalize(contact.name),
    };
    const { id, ...contactData } = contactCapitalized;
    try {
      const response = await axios.patch(`/contacts/${id}`, contactData);
      toast.success(`${contactData.name} was updated`);
      return response.data;
    } catch (error) {
      toast.error(errorMsg);
    }
  }
);
