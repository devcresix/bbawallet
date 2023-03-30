/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View} from 'react-native';

// Components
import Layout from '../../components/Layout';

/**
 * @param navigation {object}
 * @returns {*}
 * @constructor
 */
function DiscoverScreen({_navigation}: any): JSX.Element {
  return (
    <Layout>
      <View
        style={[
          styles.defaultContainer,
          {
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
          },
        ]}
      />
    </Layout>
  );
}

const styles = StyleSheet.create({
  defaultContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
});

export default DiscoverScreen;
