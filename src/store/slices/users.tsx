import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/User";

interface IUserSlice {
  list: Array<User>;
}

const initialState: IUserSlice = {
  list: []
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: (state) => {
      state.list = [];
    },
    append: (state, action: PayloadAction<Array<User>>) => {
      state.list.push(...action.payload);
    }
  }
});

export const userSliceActions = {
  ...userSlice.actions
};
