import {createSlice} from '@reduxjs/toolkit';
import {IThemeState} from '../../types';

const initialState: IThemeState = {
  theme: 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    light: state => {
      state.theme = 'light';
    },
    dark: state => {
      state.theme = 'dark';
    },
  },
});

export const {light, dark} = themeSlice.actions;

export default themeSlice.reducer;
