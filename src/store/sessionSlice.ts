import {createSlice} from '@reduxjs/toolkit';
import {INetwork, IMasterKey} from '@bbachain/prolibbti';

import {ISessionState} from '../types';

const initialState: ISessionState = {
  accounts: [],
  current: null as unknown as IMasterKey,
  network: null as unknown as INetwork,
  masterKeys: [],
  currentKey: null as unknown as IMasterKey,
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
    // Master Keys
    addMasterKey: (state, {payload}) => {
      state.masterKeys = [...state.masterKeys, payload];
    },
    setCurrentKey: (state, {payload}) => {
      state.currentKey = payload;
    },
    setMasterKeys: (state, {payload}) => {
      state.masterKeys = payload;
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
  // Master Keys
  addMasterKey,
  setCurrentKey,
  setMasterKeys,
  // Networks Management
  setNetwork,
} = sessionSlice.actions;

export default sessionSlice.reducer;
