import React, {ReactNode} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Divider} from 'react-native-paper';
import {useTheme} from '@rneui/themed';

import Navbar from '../Navbar';

interface Props {
  children?: ReactNode;
}

function Layout({children}: Props) {
  const {theme} = useTheme();
  return (
    <SafeAreaView>
      <Navbar />
      <Divider />
      <View
        style={{
          ...styles.container,
          backgroundColor: theme.colors.background,
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
