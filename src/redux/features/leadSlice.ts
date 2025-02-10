import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  interestedCountry?: string;
  message?: string;
  createdAt: string;
}

interface LeadState {
  leads: Lead[];
  loading: boolean;
  error: string | null;
}

const leadInitialState: LeadState = {
  leads: [],
  loading: false,
  error: null,
};

export const leadSlice = createSlice({
  name: "leads",
  initialState: leadInitialState,
  reducers: {
    addLead: (state, action: PayloadAction<Lead>) => {
      state.leads.push(action.payload);
    },
    setLeadLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});
