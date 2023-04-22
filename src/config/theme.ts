import {
  DefaultTheme as PaperDefaultTheme,
  MD3DarkTheme as PaperDarkTheme,
} from 'react-native-paper';
// import {
//   DefaultTheme as NavigationDefaultTheme,
//   DarkTheme as NavigationDarkTheme,
// } from '@react-navigation/native';
import {createTheme} from '@rneui/themed';

const themes: any = {
  light: {
    ...PaperDefaultTheme,
    // ...NavigationDefaultTheme,
    colors: {
      ...PaperDefaultTheme.colors,
      // ...NavigationDefaultTheme.colors,
    },
  },
  dark: {
    ...PaperDarkTheme,
    // ...NavigationDarkTheme,
    colors: {
      ...PaperDarkTheme.colors,
      // ...NavigationDarkTheme.colors,
    },
  },
};

export const elementsTheme = createTheme({
  lightColors: {
    // background: 'rgb(67, 156, 224)',
  },
  darkColors: {
    // background: '#130E56',
  },
  mode: 'light',
});

export default themes;
