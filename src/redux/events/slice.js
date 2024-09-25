import { createSlice } from '@reduxjs/toolkit';
import { fetchEvents } from './operations';

const eventsInitialState = {
  items: [],
  loading: false,
  error: null,
};

const isPending = state => {
  state.loading = true;
  state.error = null;
};

const isRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const eventsSlice = createSlice({
  name: 'events',
  initialState: eventsInitialState,
  extraReducers: builder => {
    builder
      //fetch events
      .addCase(fetchEvents.pending, isPending)
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchEvents.rejected, isRejected);
  },
});

export const eventsReducer = eventsSlice.reducer;
