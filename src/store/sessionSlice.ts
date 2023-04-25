import {createSlice} from '@reduxjs/toolkit';
import {INetwork, IMasterKey} from '@bbachain/masterkeyprolibbti';
import {Account} from '@bbachain/masterkeyprolibbti/dist/Account';
import {ISessionState} from '../types';

const initialState: ISessionState = {
  masterKeys: [],
  currentKey: null as unknown as IMasterKey,
  network: null as unknown as INetwork,
  account: null as unknown as Account,
  addresses: [],
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
    // Addresses Book
    setAddressBook: (state, {payload}) => {
      state.addresses = payload;
    },
    addAddressBook: (state, {payload}) => {
      if (state.addresses.indexOf(payload) === -1) {
        state.addresses = [...state.addresses, payload];
      }
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
  // Addresses Book
  setAddressBook,
  addAddressBook,
} = sessionSlice.actions;

export default sessionSlice.reducer;
