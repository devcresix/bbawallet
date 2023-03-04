import React from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import type {RootState} from '../../store';
import {decrement, increment} from '../../features/counter/counterSlice';

function HomePage(): JSX.Element {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <SafeAreaView>
      <Text>Increment/Decrement the number by 2, using Redux.</Text>
      <Text>{count}</Text>
      <Button title="+" onPress={() => dispatch(increment())} />
      <Button title="-" onPress={() => dispatch(decrement())} />
    </SafeAreaView>
  );
}

export default HomePage;
