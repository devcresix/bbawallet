/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Layout from '../../components/Layout';

function TransactionsScreen({_navigation}: any) {
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

export default TransactionsScreen;
