import {createSlice} from '@reduxjs/toolkit';
import {IAccountState, ISessionState} from '../types';

const initialState: ISessionState = {
  current: null as unknown as IAccountState,
  accounts: [],
};

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    addAccount: (state, {payload}) => {
      state.accounts = [...state.accounts, payload];
    },
    setCurrentAccount: (state, {payload}) => {
      state.current = payload;
    },
    setAccounts: (state, {payload}) => {
      state.accounts = payload;
    },
  },
});

export const {addAccount, setCurrentAccount, setAccounts} =
  sessionSlice.actions;

export default sessionSlice.reducer;
