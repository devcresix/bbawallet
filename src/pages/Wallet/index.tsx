import React from 'react';
import {Button, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import type {RootState} from '../../store';
import {decrement, increment} from '../../features/counter/counterSlice';
import HeaderComponent from '../../components/Header';

function WalletPage(): JSX.Element {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <HeaderComponent title="Wallet" />
      <Text>Increment/Decrement the number by 2, using Redux.</Text>
      <Text>{count}</Text>
      <Button title="+" onPress={() => dispatch(increment())} />
      <Button title="-" onPress={() => dispatch(decrement())} />
    </>
  );
}

export default WalletPage;
