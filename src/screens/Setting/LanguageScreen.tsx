/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Utils & Store
import useTranslations, {withTranslation} from '../../hooks/useTranslations';
import ListItem from '../../components/ListItem';

function LanguageScreen() {
  const {selected, languages, changeLanguage} = useTranslations();
  const handlePressLanguage = (name: string) => {
    changeLanguage(name);
  };

  return (
    <>
      {languages.map(lang => (
        <ListItem
          key={lang.name}
          title={lang.label}
          left={props => (
            <Image
              {...props}
              source={lang.flag}
              style={{...styles.leftImage}}
            />
          )}
          right={props =>
            lang.name === selected ? (
              <Icon name="check-bold" {...props} />
            ) : null
          }
          onPress={() => handlePressLanguage(lang.name)}
        />
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  leftImage: {
    margin: 8,
    height: 24,
    width: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default withTranslation()(LanguageScreen);
