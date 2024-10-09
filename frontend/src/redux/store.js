// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './authSlice'; // Ensure the correct path to your authSlice

// const store = configureStore({
//   reducer: {
//     auth: authReducer,
//   },
// });

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice'; // Ensure the correct path to your authSlice

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
