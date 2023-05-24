import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
export interface IGroupDetailData {
  group: {
    id: number;
    name: string;
    description: string;
    icon_id: number;
    cover: string;
    archived: number;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    cover_url: string;
  };
  members_count: number;
}
export interface IGroupAboutFetchedPayload {
  res: any;
  data: IGroupDetailData | null;
  err: string | undefined;
}

export interface CounterState {
  nilainya: number;
  fetching: boolean;
  fetched: boolean;
  res: any;
  err: string | undefined;
  data: IGroupDetailData | null;
}

const initialState: CounterState = {
  nilainya: 0,
  fetching: false,
  fetched: false,
  res: null,
  err: undefined,
  data: null,
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    fetch: (state) => {
      state.fetching = true;
      state.fetched = false;
    },
    fetched: (state, action: PayloadAction<IGroupAboutFetchedPayload>) => {
      state.fetching = false;
      state.fetched = true;
      state.res = action.payload.res;
      state.data = action.payload.data;
      state.err = action.payload.err;
    },
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.nilainya += 1
    },
    decrement: (state) => {
      state.nilainya -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.nilainya += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = usersSlice.actions;

export const users = usersSlice.reducer;