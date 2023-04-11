import React, {useEffect} from 'react';
import {Text, StyleSheet, ActivityIndicator} from 'react-native';
import InitLayout from '../../components/Layout/InitLayout';
import useAccounts from '../../hooks/useAccounts';
import useNetworks from '../../hooks/useNetworks';

function LoadingScreen() {
  const {loadAccounts} = useAccounts();
  const {loadNetwork} = useNetworks();

  useEffect(() => {
    setTimeout(async () => {
      await loadAccounts();
      await loadNetwork();
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
