import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
export interface IGroupDetailData {
  group: {
    id: number;
    title: string;
    description: string;
    price: string;
    discountPercentage: string;
    rating: string;
    stock: string;
    brand: string;
    category: string;
    thumbnail: string;
  };
  members_count: number;
}
export interface IUsersPayload {
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
  isOpen: boolean;
}

const initialState: CounterState = {
  nilainya: 0,
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
    fetched: (state, action: PayloadAction<IUsersPayload>) => {
      state.fetching = false;
      state.fetched = true;
      state.res = action.payload.res;
      state.data = action.payload.data;
      state.err = action.payload.err;
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