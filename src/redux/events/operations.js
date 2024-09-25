import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:3000';
// axios.defaults.baseURL = 'http://localhost:3000';

export const fetchEvents = createAsyncThunk(
  'campers/fetchEvents',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/events');
      console.log('response: ', response.data.data);

      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
