import React, {useEffect} from 'react';
import {Text, StyleSheet, ActivityIndicator} from 'react-native';

import {name as appName} from '../../../app.json';
import InitLayout from '../../components/Layout/InitLayout';
import useNetworks from '../../hooks/useNetworks';
import useMasterKey from '../../hooks/useMasterKey';

function LoadingScreen() {
  const {loadNetwork} = useNetworks();
  const {loadMasterKeys} = useMasterKey();

  useEffect(() => {
    setTimeout(async () => {
      await loadNetwork();
      await loadMasterKeys();
    }, 2500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <InitLayout>
      <Text style={styles.textStyles}>{appName}</Text>
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
