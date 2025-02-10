import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "./features/videoSlice";
import collegesReducer from "./features/collegeSlice";

export const store = configureStore({
  reducer: {
    videos: videosReducer,
    colleges: collegesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
