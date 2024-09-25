import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.baseURL = 'https://events-app-back-dojt.onrender.com';

export const fetchParticipants = createAsyncThunk(
  'events/fetchParticipants',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/participants');
      console.log('participants: ', response.data.data);

      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
