/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import GlobalLayout from '../../components/Global/GlobalLayout';
import GlobalText from '../../components/Global/GlobalText';
import packageInfo from '../../../package.json';
import CardButton from '../../components/Card/CardButton';

const styles = StyleSheet.create({
  appVersion: {
    position: 'absolute',
    bottom: 8,
    left: 0,
    right: 0,
    textAlign: 'center',
  },
});

function SettingPage(): JSX.Element {
  const {version} = packageInfo;

  return (
    <SafeAreaView>
      <GlobalLayout>
        <GlobalLayout.Header>
          <CardButton
            title="Address Book"
            actionIcon="right"
            image={require('../../assets/images/address-book.png')}
            onPress={() => {}}>
            <GlobalText type="caption">Address Book</GlobalText>
          </CardButton>
          <CardButton title="Language" actionIcon="right" onPress={() => {}}>
            <GlobalText type="caption">English</GlobalText>
          </CardButton>
          <CardButton title="Network" actionIcon="right" onPress={() => {}}>
            <GlobalText type="caption">mainnet</GlobalText>
          </CardButton>
          <CardButton
            title="Trusted Apps"
            actionIcon="right"
            onPress={() => {}}
          />
          <CardButton title="Support" actionIcon="right" onPress={() => {}} />
          <CardButton title="About Us" actionIcon="right" onPress={() => {}} />
        </GlobalLayout.Header>
      </GlobalLayout>
    </SafeAreaView>
  );
}

export default SettingPage;
