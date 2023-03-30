/* eslint-disable @typescript-eslint/no-unused-vars */
import {useState} from 'react';
import {mapValues} from 'lodash';
import {IAccount} from '../types';
import storageKeys from '../config/storageKeys';
import storage from '../utils/storage';

const useAccounts = () => {
  const [counter, setCounter] = useState(0);
  const [accounts, setAccounts] = useState([] as IAccount[]);

  const addAccount = async (account: IAccount, password: string) => {
    const newCounter = counter + 1;
    const newAccounts = [...accounts, account];
    const newMnemonics = newAccounts.reduce(
      (mnemonics: any, {id, mnemonic}: any) => {
        mnemonics[id] = mnemonic;
        return mnemonics;
      },
      {},
    );
    setCounter(counter + 1);
    setAccounts([...accounts, account]);
    await storage.setItem(storageKeys.MNEMONICS, newMnemonics);
    await storage.setItem(storageKeys.COUNTER, newCounter);
    await storage.setItem(
      storageKeys.ACCOUNTS,
      newAccounts.map(({id, networksAccounts}) => {
        const getPathIndexes = (networkAccounts: {[x: string]: any}) => {
          const mapIndex = (index: string) =>
            networkAccounts[index] ? parseInt(index, 10) : null;
          return Object.keys(networkAccounts).map(mapIndex);
        };

        return {
          id,
          pathIndexes: mapValues(networksAccounts, getPathIndexes),
        };
      }),
    );
  };

  return {
    counter,
    accounts,
  };
};

export default useAccounts;
