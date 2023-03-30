/* eslint-disable react-native/no-inline-styles */
import React, {ReactNode} from 'react';
import {SafeAreaView, View} from 'react-native';
import {Divider, Text} from 'react-native-paper';

// Components
import Navbar from '../../components/Navbar';
import ScrollViewFadeFirst from '../../components/Container/ScrollViewFadeFirst';
import ShowFromTop from '../../components/Animation/ShowFromTop';

interface Props {
  children?: ReactNode;
}

/**
 * @constructor
 */
function Layout({children}: Props) {
  const Header: any = (
    <View>
      <Navbar rightButton={<Text>Mainnet</Text>} />
      <Divider />
    </View>
  );

  return (
    <SafeAreaView>
      <ScrollViewFadeFirst height={200} element={Header}>
        <View style={{height: 20}} />
        <ShowFromTop>{children}</ShowFromTop>
      </ScrollViewFadeFirst>
    </SafeAreaView>
  );
}

export default Layout;
