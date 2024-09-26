import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.baseURL = 'https://events-app-back-dojt.onrender.com';

export const fetchParticipants = createAsyncThunk(
  'participants/fetchParticipants',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/participants');

      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createParticipant = createAsyncThunk(
  'participants/createParticipant',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/participants', credentials);

      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
