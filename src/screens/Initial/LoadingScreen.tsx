import React, {useEffect} from 'react';
import {Text, StyleSheet, ActivityIndicator} from 'react-native';
import InitLayout from '../../components/Layout/InitLayout';
import useAccounts from '../../hooks/useAccounts';

function LoadingScreen() {
  const {loadAccounts} = useAccounts();

  useEffect(() => {
    setTimeout(() => {
      loadAccounts();
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <InitLayout>
      <Text style={styles.textStyles}>BBA Wallet</Text>
      <ActivityIndicator animating={true} style={styles.indicatorStyle} />
    </InitLayout>
  );
}

const styles = StyleSheet.create({
  textStyles: {
    color: 'black',
    fontSize: 32,
    fontWeight: 'bold',
  },
  indicatorStyle: {
    top: 100,
  },
});

export default LoadingScreen;
