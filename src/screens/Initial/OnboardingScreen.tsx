import React from 'react';
import {Dimensions, Image, StyleSheet} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

import {withTranslation} from '../../hooks/useTranslations';

function OnboardingScreen({navigation, t}: any) {
  const handleGetStarted = () => {
    navigation.push('Choose');
  };

  return (
    <Onboarding
      onSkip={handleGetStarted}
      onDone={handleGetStarted}
      skipLabel={t('onboarding.skip')}
      nextLabel={t('onboarding.next')}
      pages={[
        {
          title: t('onboarding.title'),
          subtitle: t('onboarding.description'),
          backgroundColor: 'transperant',
          image: (
            <Image
              style={styles.viewOnboardingImage}
              source={require('../../../assets/images/welcome/welcome1.png')}
            />
          ),
        },
        {
          title: t('onboarding.title'),
          subtitle: t('onboarding.description'),
          backgroundColor: 'transperant',
          image: (
            <Image
              style={styles.viewOnboardingImage}
              source={require('../../../assets/images/welcome/welcome2.png')}
            />
          ),
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  viewOnboardingImage: {
    width: Dimensions.get('window').width - 85,
    height: 230,
  },
});

export default withTranslation()(OnboardingScreen);
