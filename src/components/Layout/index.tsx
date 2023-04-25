import React, {ReactNode} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {Divider} from 'react-native-paper';

import Navbar from '../Navbar';

interface Props {
  children?: ReactNode;
}

function Layout({children}: Props) {
  const tabBarheight = useBottomTabBarHeight();

  return (
    <View style={styles.container}>
      <Navbar />
      <Divider />

      {/* Scrollable Content */}
      <View style={styles.scrollContainer}>
        <ScrollView
          contentContainerStyle={{
            ...styles.scrollContentContainer,
            paddingBottom: tabBarheight,
          }}>
          {children}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContentContainer: {
    marginTop: 5,
    alignItems: 'center',
  },
});

export default Layout;
