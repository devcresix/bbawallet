import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

// Utils
import {withTranslation} from '../../hooks/useTranslations';

function EmptyComponent({t}: any) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/3024049.png')}
        style={styles.imageItem}
        alt={t('No Data')}
      />
      <Text>{t('No Data')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  imageItem: {
    height: 200,
    width: 200,
  },
});

export default withTranslation()(EmptyComponent);
