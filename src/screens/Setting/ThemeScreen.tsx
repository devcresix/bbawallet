/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ListItem, Stack} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {changeTheme} from '../../store/appSlice';
import {withTranslation} from '../../hooks/useTranslations';
import {RootState} from '../../store';

function ThemeScreen({navigation, t}: any) {
  const dispatch = useDispatch();
  const {theme} = useSelector((state: RootState) => state.app);

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const handlePressTheme = (theme: 'light' | 'dark') => {
    dispatch(changeTheme(theme));
    navigation.goBack();
  };

  return (
    <>
      <Stack>
        <ListItem
          title={t('select-theme.light')}
          disabled={theme === 'light'}
          trailing={props =>
            theme === 'light' ? <Icon name="check-bold" {...props} /> : null
          }
          onPress={() => handlePressTheme('light')}
        />
        <ListItem
          title={t('select-theme.dark')}
          disabled={theme === 'dark'}
          trailing={props =>
            theme === 'dark' ? <Icon name="check-bold" {...props} /> : null
          }
          onPress={() => handlePressTheme('dark')}
        />
      </Stack>
    </>
  );
}

export default withTranslation()(ThemeScreen);
