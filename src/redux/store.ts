import { configureStore } from "@reduxjs/toolkit";
import sqlQuerySlice from "./slices/sqlQuerySlice";

export const store = configureStore({
  reducer: {
    queryDashboard: sqlQuerySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
