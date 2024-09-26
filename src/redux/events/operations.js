import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:3000';
// axios.defaults.baseURL = 'https://events-app-back-dojt.onrender.com';

export const fetchEvents = createAsyncThunk(
  'events/fetchEvents',
  async (queryParams, thunkAPI) => {
    try {
      const response = await axios.get('/events', {
        params: {
          page: queryParams.page || 1,
          perPage: queryParams.perPage || 10,
          sortBy: queryParams.sortBy || '_id',
          sortOrder: queryParams.sortOrder || 'asc',
        },
      });

      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
