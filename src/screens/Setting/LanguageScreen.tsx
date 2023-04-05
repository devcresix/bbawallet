/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ListItem, Stack} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Utils & Store
import storageKeys from '../../config/storageKeys';
import {changeLanguage} from '../../features/appSlice';
import {RootState} from '../../store';
import storage from '../../utils/storage';

const languages = [
  {code: 'en', name: 'English'},
  {code: 'es', name: 'Spanish'},
  {code: 'hi', name: 'Hindi'},
];

function LanguageScreen() {
  const dispatch = useDispatch();
  const {language} = useSelector((state: RootState) => state.app);

  const handlePressLanguage = (code: string) => {
    storage.setItem(storageKeys.LANGUAGE, code).then(() => {
      dispatch(changeLanguage(code));
    });
  };

  return (
    <>
      <Stack>
        {languages.map(lang => (
          <ListItem
            key={lang.code}
            title={lang.name}
            trailing={props =>
              lang.code === language ? (
                <Icon name="check-bold" {...props} />
              ) : null
            }
            onPress={() => handlePressLanguage(lang.code)}
          />
        ))}
      </Stack>
    </>
  );
}

export default LanguageScreen;
