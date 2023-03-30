import React from 'react';
import {Button, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

// Components
import Layout from '../../components/Layout';
import {dark, light} from '../../features/appSlice';
import type {RootState} from '../../store';

function WalletScreen(): JSX.Element {
  const theme = useSelector((state: RootState) => state.app.theme);
  const dispatch = useDispatch();

  return (
    <Layout>
      <Text>Increment/Decrement the number by 2, using Redux.</Text>
      <Text>{theme}</Text>
      <Button title="+" onPress={() => dispatch(light())} />
      <Button title="-" onPress={() => dispatch(dark())} />
    </Layout>
  );
}

export default WalletScreen;
