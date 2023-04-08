/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  Image,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';

// Components
import type {RootState} from '../../store';
import Layout from '../../components/Layout';
import ListItem from '../../components/ListItem';

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
          <View style={styles.viewTokenListScroll}>
            <ListItem
              title="USDT"
              description="TetherUS"
              left={props => (
                <Image
                  {...props}
                  source={require('../../assets/images/tokens/usdt.png')}
                  style={{...styles.leftImage}}
                />
              )}
              right={props => (
                <Text
                  style={styles.viewTokenListScrollItemTrailingText}
                  {...props}>
                  1,000
                </Text>
              )}
            />
            <ListItem
              title="BUSD"
              description="Binance USD"
              left={props => (
                <Image
                  {...props}
                  source={require('../../assets/images/tokens/busd.png')}
                  style={{...styles.leftImage}}
                />
              )}
              right={props => (
                <Text
                  style={styles.viewTokenListScrollItemTrailingText}
                  {...props}>
                  2,345,678
                </Text>
              )}
            />
          </View>
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
  leftImage: {
    margin: 10,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewTokenListScrollItemTrailingText: {
    color: 'black',
    textAlign: 'right',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default AssetsScreen;
