/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {StyleSheet} from 'react-native';
import {List} from 'react-native-paper';
import {IMasterKey} from '@bbachain/prolibbti';

import useAccounts from '../../hooks/useAccounts';
import {withTranslation} from '../../hooks/useTranslations';
import useNetworks from '../../hooks/useNetworks';
import AccountUtils from '../../utils/AccountUtils';

interface ISelectAccountsProps {
  onPress: (account: IMasterKey) => void;
  onCreate: () => void;
  t: any;
}

function SelectAccounts({onPress, onCreate, t}: ISelectAccountsProps) {
  const {network} = useNetworks();
  const {current, accounts} = useAccounts();

  return (
    <>
      {accounts.map(account => (
        <List.Item
          key={account.id}
          title={account.name}
          description={AccountUtils.getDeriveAddress(current, network)}
          left={props => <List.Icon {...props} icon="key" />}
          right={props =>
            current.mnemonic === account.mnemonic ? (
              <List.Icon {...props} icon="check" />
            ) : null
          }
          style={{...styles.listItem}}
          onPress={() => onPress(account)}
        />
      ))}
      <List.Item
        title={t('select-masterkey.create-masterkey')}
        left={props => <List.Icon {...props} icon="plus" />}
        style={{...styles.listItem}}
        onPress={onCreate}
      />
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

export default withTranslation()(SelectAccounts);
