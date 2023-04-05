/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {Avatar, ListItem, Stack} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Utils & Store
import useTranslations from '../../hooks/useTranslations';

function LanguageScreen({navigation}: any) {
  const {selected, languages, changeLanguage} = useTranslations();
  const handlePressLanguage = (name: string) => {
    changeLanguage(name);
    navigation.goBack();
  };

  return (
    <>
      <Stack>
        {languages.map(lang => (
          <ListItem
            key={lang.name}
            title={lang.label}
            leadingMode="icon"
            leading={<Avatar image={lang.flag} size={24} />}
            trailing={props =>
              lang.name === selected ? (
                <Icon name="check-bold" {...props} />
              ) : null
            }
            onPress={() => handlePressLanguage(lang.name)}
          />
        ))}
      </Stack>
    </>
  );
}

export default LanguageScreen;
