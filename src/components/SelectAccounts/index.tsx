/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {StyleSheet} from 'react-native';
import {List} from 'react-native-paper';
import {IMasterKey} from '@bbachain/masterkeyprolibbti';

import useMasterKey from '../../hooks/useMasterKey';
import {withTranslation} from '../../hooks/useTranslations';
import useAccounts from '../../hooks/useAccounts';
// import useNetworks from '../../hooks/useNetworks';
// import AccountUtils from '../../utils/AccountUtils';

interface ISelectAccountsProps {
  onPress: (account: IMasterKey) => void;
  onCreate: () => void;
  t: any;
}

function SelectAccounts({onPress, onCreate, t}: ISelectAccountsProps) {
  // const {network} = useNetworks();
  const {currentKey, masterKeys} = useMasterKey();
  const {account} = useAccounts();

  return (
    <>
      {masterKeys.map(k => (
        <List.Item
          key={k.id}
          title={k.name}
          description={account.toAddress()}
          left={props => <List.Icon {...props} icon="key" />}
          right={props =>
            currentKey.mnemonic === k.mnemonic ? (
              <List.Icon {...props} icon="check" />
            ) : null
          }
          style={{...styles.listItem}}
          onPress={() => onPress(k)}
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
