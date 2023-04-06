import {createSlice} from '@reduxjs/toolkit';
import constants from '../config/constants';
import {IAppState} from '../types';

const initialState: IAppState = {
  loading: false,
  theme: constants.THEME_DARK,
  language: constants.DEFAULT_LANGUAGE,
  session: {},
};

export const appSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    /**
     * @deprecated until 6 April, 2023
     */
    light: state => {
      state.theme = constants.THEME_LIGHT;
    },
    /**
     * @deprecated until 6 April, 2023
     */
    dark: state => {
      state.theme = constants.THEME_DARK;
    },
    changeTheme: (state, {payload}: {payload: 'light' | 'dark'}) => {
      state.theme = payload;
    },
    setSession: (state, {payload}) => {
      state.session = payload;
    },
    resetDevice: state => {
      state.session = {};
    },
    changeLanguage: (state, {payload}) => {
      state.language = payload;
    },
  },
});

export const {
  light,
  dark,
  changeTheme,
  setSession,
  resetDevice,
  changeLanguage,
} = appSlice.actions;

export default appSlice.reducer;
