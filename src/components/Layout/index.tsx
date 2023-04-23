import React, {ReactNode} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Divider} from 'react-native-paper';

import Navbar from '../Navbar';

interface Props {
  children?: ReactNode;
}

function Layout({children}: Props) {
  return (
    <SafeAreaView>
      <Navbar />
      <Divider />
      <View
        style={{
          ...styles.container,
        }}>
        {children}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
});

export default Layout;
