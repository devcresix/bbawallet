/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {Image, StyleSheet} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

function OnboardingScreen({navigation}: any) {
  return (
    <Onboarding
      pages={[
        {
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
          backgroundColor: '#fff',
          image: (
            <Image
              style={styles.viewOnboardingImage}
              source={require('../../assets/images/welcome/welcome1.png')}
            />
          ),
        },
        {
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
          backgroundColor: '#fff',
          image: (
            <Image
              style={styles.viewOnboardingImage}
              source={require('../../assets/images/welcome/welcome2.png')}
            />
          ),
        },
        {
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
          backgroundColor: '#fff',
          image: (
            <Image
              style={styles.viewOnboardingImage}
              source={require('../../assets/images/welcome/welcome3.png')}
            />
          ),
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  viewOnboardingImage: {
    width: 200,
    height: 200,
  },
});

export default OnboardingScreen;
