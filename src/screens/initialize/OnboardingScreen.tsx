import React from 'react';
import {Image, StyleSheet} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

function OnboardingScreen({navigation}: any) {
  const handleGetStarted = () => {
    navigation.push('Choose');
  };

  return (
    <Onboarding
      onSkip={handleGetStarted}
      onDone={handleGetStarted}
      pages={[
        {
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
          backgroundColor: '#ffc266',
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
          backgroundColor: '#ffc266',
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
          backgroundColor: '#ffc266',
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
