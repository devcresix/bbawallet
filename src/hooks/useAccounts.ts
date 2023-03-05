/* eslint-disable @typescript-eslint/no-unused-vars */
import {useState} from 'react';
import storage from '../utils/storage';
import {IAccount} from '../utils/types';

const useAccounts = () => {
  // const [counter, setCounter] = useState(0);
  // const [accounts, setAccounts] = useState([]);
  // const [accountId, setAccountId] = useState({} as IAccount);
  // const [networkId, setNetworkId] = useState(null);
  // const [pathIndex, setPathIndex] = useState(0);

  const addAccount = async (account: IAccount, password: string) => {
    //   const newCounter = counter + 1;
    //   const newAccounts = [...accounts, account];
    //   const newAccountId = account.id;
    //   const newNetworkId = networkId || Object.keys(account.networksAccounts)[0];
    //   const newMnemonics = newAccounts.reduce(
    //     (mnemonics, {id, mnemonic}: any) => {
    //       mnemonics[id] = mnemonic;
    //       return mnemonics;
    //     },
    //     {},
    //   );
    //   setCounter(newCounter);
    //   setAccounts(newAccounts);
    //   setAccountId(newAccountId);
    //   setNetworkId(newNetworkId);
    //   setPathIndex(getDefaultPathIndex(account, newNetworkId));
    //   if (password) {
    //     await storage.setItem(MNEMONICS, await lock(newMnemonics, password));
    //     await stash.setItem('password', password);
    //   } else {
    //     await storage.setItem(MNEMONICS, newMnemonics);
    //   }
    //   await storage.setItem(COUNTER, newCounter);
    //   await storage.setItem(ACCOUNTS, newAccounts.map(formatAccount));
    //   await storage.setItem(ACCOUNT_ID, newAccountId);
    //   await storage.setItem(NETWORK_ID, newNetworkId);
    //   await storage.setItem(PATH_INDEX, 0);
    //   setRequiredLock(!!password);
  };

  return [addAccount];
};

export default useAccounts;
