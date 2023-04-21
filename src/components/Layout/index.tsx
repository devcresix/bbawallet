import React, {ReactNode} from 'react';
import {SafeAreaView, StyleSheet, View, ScrollView} from 'react-native';
import {Divider} from 'react-native-paper';

import Navbar from '../Navbar';
import BackgroundGradient from './BackgroundGradient';

interface Props {
  children?: ReactNode;
}

function Layout({children}: Props) {
  return (
    <SafeAreaView>
      <BackgroundGradient />
      <Navbar />
      <Divider />
      <View style={styles.viewStyles}>
        <ScrollView style={styles.viewScrollView}>{children}</ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  viewStyles: {
    height: '100%',
    // backgroundColor: 'gray',
  },
  viewScrollView: {
    // backgroundColor: 'green',
  },
});

export default Layout;
