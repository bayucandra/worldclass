import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
export interface IUserDataRecord {
  _id: number;
  fname: string;
  lname: string;
  email: string;
  country: string;
  createdAt: string;
  commentsCount: number;
  invoiceCount: string; // count on how many invoice
  buyCount: number; // count on how many item has bought
}
export interface IUserDataPayload {
  res: any;
  data: IUserDataRecord | null;
  err: string | undefined;
}

export interface UserState {
  register: {
    registering: boolean;
    registered: boolean;
    res: any;
    err: string | undefined;
  };
  fetching: boolean;
  fetched: boolean;
  res: any;
  err: string | undefined;
  data: IUserDataRecord | null;
  isOpen: boolean;
}

const initialState: UserState = {
  register: {
    registering: false,
    registered: false,
    res: null,
    err: undefined,
  },
  fetching: false,
  fetched: false,
  res: null,
  err: undefined,
  data: null,
  isOpen: false,
}

export const usersSlice = createSlice({
  name: 'usersData',
  initialState,
  reducers: {
    fetching: (state) => {
      state.fetching = true;
      state.fetched = false;
    },
    fetched: (state, action: PayloadAction<IUserDataPayload>) => {
      state.fetching = false;
      state.fetched = true;
      state.res = action.payload.res;
      state.data = action.payload.data;
      state.err = action.payload.err;
    },
    register: (state) => {
      state.register.registering = true;
      state.register.registered = false;
      state.register.res = null;
      state.register.err = undefined;
    },
    registered: (state, action: PayloadAction<IUserDataPayload>) => {
      state.register.registering = false;
      state.register.registered = true;
      state.register.res = action.payload.res;
      state.register.err = action.payload.err;
    },
    openModalLearnList: (state) => {
      state.isOpen = true;
    },
    closeModalLearnList: (state) => {
      state.isOpen = false;
    }
  },
})

export const usersData = usersSlice.reducer;