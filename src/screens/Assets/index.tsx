/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {Button, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';

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
        <View>
          {/* Token USDT */}
          <View>
            <View>
              <Text>Logo</Text>
            </View>
            <View>
              <Text>TetherUS</Text>
              <Text>USDT</Text>
            </View>
            <View>
              <Text>100,000 USDT</Text>
            </View>
          </View>
          {/* Token ARKC */}
          <View>
            <View>
              <Text>Logo</Text>
            </View>
            <View>
              <Text>Aka Polic</Text>
              <Text>ARKC</Text>
            </View>
            <View>
              <Text>500,000 ARKC</Text>
            </View>
          </View>
        </View>
      </View>
    </Layout>
  );
}

export default AssetsScreen;
