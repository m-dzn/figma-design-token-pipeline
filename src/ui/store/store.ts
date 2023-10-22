// Third-party modules
import { configureStore } from "@reduxjs/toolkit";

// Local modules
import { reducer } from "./reducers";

export const reduxStore = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;
