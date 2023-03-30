/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useTheme} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Components
import Navbar from '../../components/Navbar';

/**
 * @param navigation {object}
 * @returns {*}
 * @constructor
 */
function DiscoverScreen({navigation}: any): JSX.Element {
  const {colors} = useTheme();

  return (
    <>
      <Navbar
        rightButton={
          <MaterialCommunityIcons
            onPress={() => navigation.navigate('Signs', {key: 'Sign'})}
            name="swap-horizontal"
            color={colors.primary}
            size={30}
            style={{opacity: 0.5}}
          />
        }
      />
    </>
  );
}

export default DiscoverScreen;
