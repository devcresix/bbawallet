import {createSlice} from '@reduxjs/toolkit';
import {INetwork, IMasterKey} from '@bbachain/prolibbti';
import {Account} from '@bbachain/prolibbti/dist/Account';
import {ISessionState} from '../types';

const initialState: ISessionState = {
  masterKeys: [],
  currentKey: null as unknown as IMasterKey,
  network: null as unknown as INetwork,
  account: null as unknown as Account,
};

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    // Master Keys
    addMasterKey: (state, {payload}) => {
      if (state.masterKeys.indexOf(payload) === -1) {
        state.masterKeys = [...state.masterKeys, payload];
      }
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
    // Derived Account
    setAccount: (state, {payload}) => {
      state.account = payload;
    },
  },
});

export const {
  // Master Keys
  addMasterKey,
  setCurrentKey,
  setMasterKeys,
  // Networks Management
  setNetwork,
  // Derived Account
  setAccount,
} = sessionSlice.actions;

export default sessionSlice.reducer;
