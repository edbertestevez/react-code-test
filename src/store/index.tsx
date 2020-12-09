import { configureStore } from "@reduxjs/toolkit";

import { userSlice } from "./slices/users";

export const store = configureStore({
  reducer: {
    users: userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
