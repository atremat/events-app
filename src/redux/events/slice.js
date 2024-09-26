import { createSlice } from '@reduxjs/toolkit';
import { fetchEvents } from './operations';

const eventsInitialState = {
  items: [],
  loading: false,
  error: null,
  page: 1,
  perPage: 9,
  sortOrder: 'asc',
  sortBy: '_id',
  totalItems: 1,
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
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setPerPage: (state, action) => {
      state.perPage = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      //fetch events
      .addCase(fetchEvents.pending, isPending)
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.data;
      })
      .addCase(fetchEvents.rejected, isRejected);
  },
});

export const eventsReducer = eventsSlice.reducer;
