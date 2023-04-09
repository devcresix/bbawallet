import React from 'react';
import {StyleSheet} from 'react-native';
import {List} from 'react-native-paper';
import {NETWORKS, INetwork} from 'prolibbti';

import {withTranslation} from '../../hooks/useTranslations';
import useNetworks from '../../hooks/useNetworks';

interface ISelectNetworksProps {
  onPress: (network: INetwork) => void;
}

function SelectNetworks({onPress}: ISelectNetworksProps) {
  const {network} = useNetworks();
  return (
    <>
      {NETWORKS.map(n => (
        <List.Item
          key={n.symbol}
          title={n.name}
          style={{...styles.listItem}}
          // eslint-disable-next-line react/no-unstable-nested-components
          right={props =>
            network.symbol === n.symbol ? (
              <List.Icon {...props} icon="check" />
            ) : null
          }
          onPress={() => onPress(n)}
        />
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  listItem: {
    marginTop: 12,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 15,
    shadowOffset: {width: 0, height: 2},
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
});

export default withTranslation()(SelectNetworks);
