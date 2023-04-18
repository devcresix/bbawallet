/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React, {useEffect, useState} from 'react';
import {
  Image,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';

// Components
import Layout from '../../components/Layout';
import ListItem from '../../components/ListItem';
import Button from '../../components/Button';
import QRCodeDialog from '../../components/Dialog/QRCodeDialog';
import useNetworks from '../../hooks/useNetworks';
import useAccounts from '../../hooks/useAccounts';

function AssetsScreen(): JSX.Element {
  const {network} = useNetworks();
  const {account} = useAccounts();

  const [refreshing, setRefreshing] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);
  const [address, setAddress] = useState('');
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    if (account) {
      setAddress(account.toAddress());
      account.getBalance().then(newBalance => setBalance(newBalance));
    }
  }, [account]);

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
            <Text style={{fontSize: 20}}>
              {balance} {network ? network.symbol : ''}
            </Text>
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
          <View style={[styles.rowContainer]}>
            <View
              style={{
                alignItems: 'center',
                marginHorizontal: 5,
              }}>
              <Button
                icon="transfer"
                title="Transfer"
                mode="contained"
                onPress={() => console.log('Pressed Transfer')}
              />
            </View>
            <View
              style={{
                alignItems: 'center',
                marginHorizontal: 5,
              }}>
              <Button
                icon="qrcode"
                title="QRCode"
                mode="contained"
                onPress={() => setShowQRCode(true)}
              />
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
                  0
                </Text>
              )}
            />
            {/* <ListItem
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
            /> */}
          </View>
        </View>
      </ScrollView>
      <QRCodeDialog
        visible={showQRCode}
        title={network ? network.name : ''}
        value={address}
        onPressClose={() => setShowQRCode(false)}
      />
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
