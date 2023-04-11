import {createSlice} from '@reduxjs/toolkit';
import constants from '../config/constants';
import {IAppState} from '../types';

const initialState: IAppState = {
  loaded: false,
  initialized: false,
  theme: constants.THEME_LIGHT,
  language: constants.DEFAULT_LANGUAGE,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoaded: (state, {payload}) => {
      state.loaded = payload;
    },
    setInitialized: (state, {payload}) => {
      state.initialized = payload;
    },
    changeTheme: (state, {payload}: {payload: 'light' | 'dark'}) => {
      state.theme = payload;
    },
    changeLanguage: (state, {payload}) => {
      state.language = payload;
    },
  },
});

export const {
  setLoaded,
  setInitialized,
  changeTheme,
  // setSession,
  // resetDevice,
  changeLanguage,
} = appSlice.actions;

export default appSlice.reducer;
