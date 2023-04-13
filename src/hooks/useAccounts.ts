import {useDispatch, useSelector} from 'react-redux';
import {setInitialized, setLoaded} from '../store/appSlice';
import {IMasterKey} from '@bbachain/prolibbti';

import {
  setAccounts,
  addAccount as addAccountStore,
  setCurrentAccount,
} from '../store/sessionSlice';
import storageKeys from '../config/storageKeys';
import storage from '../utils/storage';
import {RootState} from '../store';

const useAccounts = () => {
  const dispatch = useDispatch();
  const {current, accounts} = useSelector((state: RootState) => state.session);

  const loadAccounts = async () => {
    try {
      // checking for loading accounts
      const accountsStorage = await storage.getItem(storageKeys.ACCOUNTS);
      if (accountsStorage) {
        dispatch(setAccounts(accountsStorage));
      }

      const currentAccountStorage = await storage.getItem(
        storageKeys.CURRENT_ACCOUNT,
      );
      if (currentAccountStorage) {
        dispatch(setCurrentAccount(currentAccountStorage));
      }

      // checking for initialized
      const initializedStorage = await storage.getItem(storageKeys.INITIALIZED);
      if (initializedStorage) {
        dispatch(setInitialized(initializedStorage));
      }
    } finally {
      dispatch(setLoaded(true));
    }
  };

  const addAccount = async (account: IMasterKey) => {
    const parsed = JSON.parse(JSON.stringify(account));
    dispatch(addAccountStore(parsed));
  };

  const setCurrent = async (account: IMasterKey) => {
    const parsed = JSON.parse(JSON.stringify(account));
    dispatch(setCurrentAccount(parsed));
  };

  const verifyAccount = (account: IMasterKey) => {
    const verified = accounts.find(e => e.mnemonic === account.mnemonic);
    if (verified) {
      const updated = accounts.map(e =>
        e.mnemonic === account.mnemonic ? {...e, verified: true} : e,
      );
      dispatch(setAccounts(updated));
      verified.verified = true;
      setCurrent(verified);
    }
  };

  return {
    current,
    accounts,
    loadAccounts,
    addAccount,
    setCurrent,
    verifyAccount,
  };
};

export default useAccounts;
