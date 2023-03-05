import React from 'react';
import {Button, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {dark, light} from '../../features/appSlice';
import type {RootState} from '../../store';

function WalletPage(): JSX.Element {
  const theme = useSelector((state: RootState) => state.app.theme);
  const dispatch = useDispatch();

  return (
    <>
      <Text>Increment/Decrement the number by 2, using Redux.</Text>
      <Text>{theme}</Text>
      <Button title="+" onPress={() => dispatch(light())} />
      <Button title="-" onPress={() => dispatch(dark())} />
    </>
  );
}

export default WalletPage;
