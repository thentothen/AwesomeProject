import { configureStore, createSlice } from '@reduxjs/toolkit';

const commonSlice = createSlice({
  name: 'common',
  initialState: {
    menu: [],
  },
  reducers: {
    setMenu: (state, action) => {
      state.menu = action.payload;
    },
  },
});

export default configureStore({
  reducer: {
    common: commonSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
