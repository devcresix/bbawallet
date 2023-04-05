/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {ListItem, Stack} from '@react-native-material/core';

// Utils & Store
import {withTranslation} from '../../hooks/useTranslations';
import {name as appName} from '../../../app.json';
import packageInfo from '../../../package.json';

function AboutScreen({t}: any) {
  const {name, version} = packageInfo;

  const Trailing = function ({text}: {text: string}) {
    return (
      <View style={styles.viewTrailing}>
        <Text style={styles.trailingText}>{text}</Text>
      </View>
    );
  };

  return (
    <>
      <Stack>
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
          trailing={() => <Trailing text={name} />}
        />
        <ListItem
          title={t('about-support.app-version')}
          trailing={() => (
            <Trailing
              text={t('about-support.app_version', {
                version,
              })}
            />
          )}
        />
      </Stack>
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
  viewTrailing: {
    flex: 1,
    width: 120,
    marginRight: 100,
  },
  trailingText: {
    textAlign: 'right',
  },
});

export default withTranslation()(AboutScreen);
