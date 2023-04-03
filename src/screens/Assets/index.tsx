/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {Button, ScrollView, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import {Avatar, ListItem} from '@react-native-material/core';

// Components
import Layout from '../../components/Layout';
import type {RootState} from '../../store';

function AssetsScreen(): JSX.Element {
  // const dispatch = useDispatch();
  const {session} = useSelector((state: RootState) => state.app);

  return (
    <Layout>
      <View>
        <Text>
          100,000.9871 BBA
          <Ionicons name="eye" />
        </Text>
      </View>
      <View>
        <Text>
          <Foundation name="euro" />
          1,456,000
        </Text>
      </View>
      <View>
        <Text>
          <Ionicons name="caret-up" />
          1.3%
        </Text>
        <Text>
          +
          <Foundation name="euro" />
          1,456
        </Text>
      </View>
      <View>
        <Text>Tokens</Text>
        {/* List of tokens */}
        <ScrollView>
          <ListItem
            title="USDT"
            secondaryText="TetherUS"
            leadingMode="avatar"
            leading={
              <Avatar
                size={40}
                image={require('../../assets/images/tokens/usdt.png')}
                imageStyle={{backgroundColor: '#ebedf0'}}
              />
            }
            trailing={props => <Text {...props}>1,000</Text>}
          />
          <ListItem
            title="BUSD"
            secondaryText="Binance USD"
            leadingMode="avatar"
            leading={
              <Avatar
                size={40}
                image={require('../../assets/images/tokens/busd.png')}
                imageStyle={{backgroundColor: '#ebedf0'}}
              />
            }
            trailing={props => <Text {...props}>2,300</Text>}
          />
        </ScrollView>
      </View>
    </Layout>
  );
}

export default AssetsScreen;
