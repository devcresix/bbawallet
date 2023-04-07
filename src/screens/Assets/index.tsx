/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {RefreshControl, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import {Avatar, ListItem, Stack} from '@react-native-material/core';

// Components
import Layout from '../../components/Layout';
import type {RootState} from '../../store';

function AssetsScreen(): JSX.Element {
  // const dispatch = useDispatch();
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  return (
    <Layout>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={[styles.viewBalance]}>
          <View
            style={[
              styles.rowContainer,
              {
                backgroundColor: 'orange',
              },
            ]}>
            <Text style={{fontSize: 20}}>0.0 BBA</Text>
            {/* <Ionicons name="eye" style={{fontSize: 24}} /> */}
          </View>
          <View
            style={[
              styles.rowContainer,
              {
                backgroundColor: 'yellow',
              },
            ]}>
            <Foundation
              style={{fontSize: 15, marginHorizontal: 5}}
              name="euro"
            />
            <Text style={{fontSize: 15}}>0.0</Text>
          </View>
          <View style={[styles.rowContainer]}>
            <View
              style={{
                width: '30%',
                alignItems: 'center',
                backgroundColor: 'red',
                marginHorizontal: 5,
              }}>
              <Text style={{fontSize: 12}}>
                <Ionicons name="caret-up" />
                0.0%
              </Text>
            </View>
            <View
              style={{
                width: '30%',
                alignItems: 'center',
                backgroundColor: 'green',
                marginHorizontal: 5,
              }}>
              <Text style={{fontSize: 12}}>
                +/-
                <Foundation name="euro" />
                0.0
              </Text>
            </View>
          </View>
        </View>
        <View style={[]}>
          <Text>Tokens</Text>
          {/* List of tokens */}
          <Stack style={styles.viewTokenListScroll}>
            <ListItem
              title="USDT"
              secondaryText="TetherUS"
              leadingMode="avatar"
              style={styles.viewTokenListScrollItem}
              leading={
                <Avatar
                  size={40}
                  image={require('../../assets/images/tokens/usdt.png')}
                  imageStyle={{backgroundColor: '#ebedf0'}}
                />
              }
              trailing={props => (
                <View style={styles.viewTokenListScrollItemTrailing}>
                  <Text
                    style={styles.viewTokenListScrollItemTrailingText}
                    {...props}>
                    1,000
                  </Text>
                </View>
              )}
            />
            <ListItem
              title="BUSD"
              secondaryText="Binance USD"
              leadingMode="avatar"
              style={styles.viewTokenListScrollItem}
              leading={
                <Avatar
                  size={40}
                  image={require('../../assets/images/tokens/busd.png')}
                  imageStyle={{backgroundColor: '#ebedf0'}}
                />
              }
              trailing={props => (
                <View style={styles.viewTokenListScrollItemTrailing}>
                  <Text
                    style={styles.viewTokenListScrollItemTrailingText}
                    {...props}>
                    2,564,192
                  </Text>
                </View>
              )}
            />
          </Stack>
        </View>
      </ScrollView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 40,
  },
  viewBalance: {
    backgroundColor: 'white',
    alignItems: 'center',
  },
  viewTokenListScroll: {},
  viewTokenListScrollItem: {},
  viewTokenListScrollItemTrailing: {
    flex: 1,
    width: 120,
    marginRight: 100,
  },
  viewTokenListScrollItemTrailingText: {
    color: 'black',
    textAlign: 'right',
    fontWeight: '500',
    fontSize: 16,
  },
});

export default AssetsScreen;
