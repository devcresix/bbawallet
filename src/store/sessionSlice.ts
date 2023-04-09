import {createSlice} from '@reduxjs/toolkit';
import {IAccountState, ISessionState} from '../types';
import {INetwork} from 'prolibbti';

const initialState: ISessionState = {
  accounts: [],
  current: null as unknown as IAccountState,
  network: null as unknown as INetwork,
};

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    // Accounts Management
    addAccount: (state, {payload}) => {
      state.accounts = [...state.accounts, payload];
    },
    setCurrentAccount: (state, {payload}) => {
      state.current = payload;
    },
    setAccounts: (state, {payload}) => {
      state.accounts = payload;
    },
    // Networks Management
    setNetwork: (state, {payload}) => {
      state.network = payload;
    },
  },
});

export const {
  // Accounts Management
  addAccount,
  setCurrentAccount,
  setAccounts,
  // Networks Management
  setNetwork,
} = sessionSlice.actions;

export default sessionSlice.reducer;
