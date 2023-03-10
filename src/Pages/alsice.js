import { createSlice } from '@reduxjs/toolkit';

const componentSlice = createSlice({
  name: 'component',
  initialState: 'Comp1',
  reducers: {
    setComponent: (state, action) => {
      return action.payload;
    },
  },
});

export const { setComponent } = componentSlice.actions;

export default componentSlice.reducer;