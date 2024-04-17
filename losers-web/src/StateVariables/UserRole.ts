import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { profile } from "../Users/client";

interface UserState {
  username: string;
  email: string;
  role: string;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  username: "",
  email: "",
  role: "",
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserProfile: (state, action: PayloadAction<UserState>) => {
      return {
        ...state,
        ...action.payload,
        loading: false, // Reset loading state when user profile is set
        error: null, // Reset error state when user profile is set
      };
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.loading = false; // Reset loading state when error occurs
    },
  },
});

export const { setUserProfile, setLoading, setError } = userSlice.actions;
export default userSlice.reducer;
