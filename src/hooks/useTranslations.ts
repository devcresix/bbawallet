import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {withTranslation as withTranslationHOC} from 'react-i18next';

import storage from '../utils/storage';
import constants from '../config/constants';
import storageKeys from '../config/storageKeys';
import i18n, {LANGUAGES, resources} from '../translations';
import {changeLanguage as changeLanguageStore} from '../features/appSlice';
import {RootState} from '../store';

export const withTranslation = withTranslationHOC;

const useTranslations = () => {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(i18n.isInitialized);
  const {language} = useSelector((state: RootState) => state.app);

  useEffect(() => {
    if (!loaded) {
      storage.getItem(storageKeys.LANGUAGE).then((languageStore: string) => {
        i18n
          .init({
            resources,
            lng: languageStore || constants.DEFAULT_LANGUAGE,
            fallbackLng: constants.DEFAULT_LANGUAGE,
            compatibilityJSON: 'v3',
            interpolation: {
              escapeValue: false,
            },
          })
          .then(() => {
            dispatch(
              changeLanguageStore(languageStore || constants.DEFAULT_LANGUAGE),
            );
            setLoaded(true);
          });
      });
    }
  }, [dispatch, loaded]);

  const changeLanguage = async (name: string) => {
    await storage.setItem(storageKeys.LANGUAGE, name);
    dispatch(changeLanguageStore(name));
    i18n.changeLanguage(name);
  };

  return {selected: language, languages: LANGUAGES, changeLanguage};
};

export default useTranslations;
