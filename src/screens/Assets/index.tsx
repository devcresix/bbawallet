/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React, {useCallback, useEffect, useState} from 'react';
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
import {ActivityIndicator} from 'react-native-paper';

// Components
import Layout from '../../components/Layout';
import ListItem from '../../components/ListItem';
import Button from '../../components/Button';
import QRCodeDialog from '../../components/Dialog/QRCodeDialog';
import useNetworks from '../../hooks/useNetworks';
import useAccounts from '../../hooks/useAccounts';

function AssetsScreen({navigation}: any) {
  const {network} = useNetworks();
  const {account} = useAccounts();

  const [processing, setProcessing] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);
  const [address, setAddress] = useState('');
  const [balance, setBalance] = useState('');

  useEffect(() => {
    setProcessing(true);
  }, [account]);

  useEffect(() => {
    if (account && processing) {
      setAddress(account.toAddress());
      account
        .getBalance()
        .then(newBalance => {
          setBalance(`${newBalance}`);
        })
        .catch(() => {
          setBalance('ERROR');
        })
        .finally(() => {
          setProcessing(false);
          setRefreshing(false);
        });
    }
  }, [account, processing]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setProcessing(true);
  }, []);

  return (
    <Layout>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={[styles.viewBalance]}>
          <View style={[styles.rowContainer, {}]}>
            {processing ? (
              <ActivityIndicator animating={true} />
            ) : (
              <Text style={{fontSize: 24}}>
                {balance} {network ? network.symbol : ''}
              </Text>
            )}
          </View>
          <View style={[styles.rowContainer, {}]}>
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
                loading={processing}
                onPress={() => navigation.push('Transfer')}
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
                loading={processing}
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
