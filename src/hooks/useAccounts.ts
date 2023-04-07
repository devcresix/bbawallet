import {useDispatch, useSelector} from 'react-redux';
import {setInitialized, setLoaded} from '../store/appSlice';
import {
  setAccounts,
  addAccount as addAccountStore,
  setCurrentAccount,
} from '../store/sessionSlice';
import {RootState} from '../store';
import {IAccountState} from '../types';
import storage from '../utils/storage';
import storageKeys from '../config/storageKeys';

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

  const addAccount = async (account: IAccountState) => {
    dispatch(addAccountStore(account));
  };

  const setCurrent = async (account: IAccountState) => {
    dispatch(setCurrentAccount(account));
  };

  const verifyAccount = (account: IAccountState) => {
    const verified = accounts.find(e => e.mnemonic === account.mnemonic);
    if (verified) {
      const updated = accounts.map(e =>
        e.mnemonic === account.mnemonic ? {...e, verified: true} : e,
      );
      dispatch(setAccounts(updated));
      setCurrent({...verified, verified: true});
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
