import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://64821ddf29fa1c5c50329bb8.mockapi.io/';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('contacts', contact);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`contacts/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    // condition: (_, thunkAPI) => {
    //   const loading = thunkAPI.getState().contacts.isLoading;
    //   console.log(loading);
    //   if (loading) {
    //     return false;
    //   }
    // },
  }
);
