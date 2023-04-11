/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {changeTheme} from '../../store/appSlice';
import {withTranslation} from '../../hooks/useTranslations';
import {RootState} from '../../store';
import ListItem from '../../components/ListItem';
import storageKeys from '../../config/storageKeys';
import storage from '../../utils/storage';

function ThemeScreen({t}: any) {
  const dispatch = useDispatch();
  const {theme} = useSelector((state: RootState) => state.app);

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const handleChangeTheme = async (theme: 'light' | 'dark') => {
    await storage.setItem(storageKeys.THEME, theme);
    dispatch(changeTheme(theme));
  };

  return (
    <>
      <ListItem
        title={t('select-theme.light')}
        right={props =>
          theme === 'light' ? <Icon name="check-bold" {...props} /> : null
        }
        onPress={() => handleChangeTheme('light')}
      />
      <ListItem
        title={t('select-theme.dark')}
        right={props =>
          theme === 'dark' ? <Icon name="check-bold" {...props} /> : null
        }
        onPress={() => handleChangeTheme('dark')}
      />
    </>
  );
}

export default withTranslation()(ThemeScreen);
