/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {StyleSheet} from 'react-native';
import {List} from 'react-native-paper';
import useAccounts from '../../hooks/useAccounts';
import {IAccountState} from '../../types';
import {withTranslation} from '../../hooks/useTranslations';

interface ISelectAccountsProps {
  onPress: (account: IAccountState) => void;
  onCreate: () => void;
}

function SelectAccounts({onPress, onCreate}: ISelectAccountsProps) {
  const {current, accounts} = useAccounts();

  return (
    <>
      {accounts.map(account => (
        <List.Item
          key={account.id}
          title={account.name}
          description={account.name}
          left={props => <List.Icon {...props} icon="key" />}
          right={props =>
            current.mnemonic === account.mnemonic ? (
              <List.Icon {...props} icon="check" />
            ) : (
              <></>
            )
          }
          style={{...styles.listItem}}
          onPress={() => onPress(account)}
        />
      ))}
      <List.Item
        title="Create Account"
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
