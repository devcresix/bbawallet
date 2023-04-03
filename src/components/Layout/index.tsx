/* eslint-disable react-native/no-inline-styles */
import React, {ReactNode} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Divider} from 'react-native-paper';

// Components
import Navbar from '../../components/Navbar';
import ScrollViewFadeFirst from '../../components/Container/ScrollViewFadeFirst';

interface Props {
  children?: ReactNode;
}

/**
 * @constructor
 */
function Layout({children}: Props) {
  const Header: any = (
    <View>
      <Navbar />
      <Divider />
    </View>
  );

  return (
    <SafeAreaView>
      <ScrollViewFadeFirst
        height={200}
        element={Header}
        style={styles.viewStyles}>
        <View style={{height: 20}} />
        {children}
      </ScrollViewFadeFirst>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  viewStyles: {
    height: '100%',
    // backgroundColor: 'gray',
  },
});

export default Layout;
