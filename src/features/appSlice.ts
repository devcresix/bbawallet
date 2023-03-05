import {createSlice} from '@reduxjs/toolkit';

import constants from '../config/constants';
import {IAppState} from '../types';

const initialState: IAppState = {
  loader: false,
  theme: constants.THEME_LIGHT,
};

export const appSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleLoader: state => {
      state.loader = !state.loader;
    },
    light: state => {
      state.theme = constants.THEME_LIGHT;
    },
    dark: state => {
      state.theme = constants.THEME_DARK;
    },
  },
});

export const {toggleLoader, light, dark} = appSlice.actions;

export default appSlice.reducer;
