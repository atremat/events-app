import { createSlice } from '@reduxjs/toolkit';
import { fetchParticipants, createParticipant } from './operations';

const participantsInitialState = {
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

const participantsSlice = createSlice({
  name: 'participants',
  initialState: participantsInitialState,
  extraReducers: builder => {
    builder
      //fetch participants
      .addCase(fetchParticipants.pending, isPending)
      .addCase(fetchParticipants.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchParticipants.rejected, isRejected)
      //create participant
      .addCase(createParticipant.pending, isPending)
      .addCase(createParticipant.fulfilled, (state, action) => {
        state.loading = false;
        state.items = [...state.items, action.payload];
      })
      .addCase(createParticipant.rejected, isRejected);
  },
});

export const participantsReducer = participantsSlice.reducer;
