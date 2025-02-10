import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface College {
  id: string;
  name: string;
  country: string;
  fees: number;
  duration: string;
  facilities: string[];
}

interface CollegeState {
  colleges: College[];
  loading: boolean;
  error: string | null;
}

const initialState: CollegeState = {
  colleges: [],
  loading: false,
  error: null,
};

const collegeSlice = createSlice({
  name: "colleges",
  initialState,
  reducers: {
    setColleges: (state, action: PayloadAction<College[]>) => {
      state.colleges = action.payload;
    },
    setCollegeLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setCollegeError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setColleges, setCollegeLoading, setCollegeError } =
  collegeSlice.actions;
export default collegeSlice.reducer;
