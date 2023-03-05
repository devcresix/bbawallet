import React from 'react';
import {Appbar} from 'react-native-paper';
import {IAppHeader} from '../types';

function HeaderComponent(props: IAppHeader): JSX.Element {
  return (
    <Appbar.Header>
      <Appbar.Content title={props.title} />
      <Appbar.Action icon="magnify" onPress={() => {}} />
    </Appbar.Header>
  );
}

export default HeaderComponent;
