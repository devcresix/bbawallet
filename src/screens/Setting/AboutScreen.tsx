/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

// Utils & Store
import {withTranslation} from '../../hooks/useTranslations';
import {name as appName} from '../../../app.json';
import packageInfo from '../../../package.json';
import ListItem from '../../components/ListItem';

function AboutScreen({t}: any) {
  const {name, version} = packageInfo;

  return (
    <>
      <View style={styles.viewStyles}>
        <Image
          style={styles.logoStyle}
          resizeMode="contain"
          source={require('../../assets/images/Logo.png')}
        />
        <Text style={styles.textStyles}>{appName}</Text>
      </View>
      <ListItem
        title={t('about-support.app-name')}
        right={() => <Text>{name}</Text>}
      />
      <ListItem
        title={t('about-support.app-version')}
        right={() => (
          <Text>
            {t('about-support.app_version', {
              version,
            })}
          </Text>
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  viewStyles: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoStyle: {
    height: 160,
    width: '100%',
  },
  textStyles: {
    color: 'black',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },
});

export default withTranslation()(AboutScreen);
