import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en.json';
import es from './es.json';
import hi from './hi.json';
import ru from './ru.json';

i18n.use(initReactI18next);

export const LANGUAGES = [
  {
    name: 'en',
    label: 'English',
    flag: require('../../assets/images/flags/en.png'),
  },
  {
    name: 'es',
    label: 'Spanish',
    flag: require('../../assets/images/flags/es.png'),
  },
  {
    name: 'hi',
    label: 'Hindi',
    flag: require('../../assets/images/flags/hi.png'),
  },
  {
    name: 'ru',
    label: 'Russian',
    flag: require('../../assets/images/flags/ru.png'),
  },
];

export const resources = {
  en: {
    translation: en,
  },
  es: {
    translation: es,
  },
  hi: {
    translation: hi,
  },
  ru: {
    translation: ru,
  },
};

export default i18n;
