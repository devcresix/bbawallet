import {useDispatch, useSelector} from 'react-redux';
import {setInitialized, setLoaded} from '../store/appSlice';
import {IMasterKey} from '@bbachain/prolibbti';

import storage from '../utils/storage';
import storageKeys from '../config/storageKeys';
import {
  addMasterKey as addMasterKeySlice,
  setCurrentKey as setCurrentKeySlice,
  setMasterKeys,
} from '../store/sessionSlice';
import {RootState} from '../store';

const useMasterKey = () => {
  const dispatch = useDispatch();
  const {currentKey, masterKeys} = useSelector(
    (state: RootState) => state.session,
  );

  const loadMasterKeys = async () => {
    try {
      // checking for loading master keys
      const keysStorage = await storage.getItem(storageKeys.MASTERKEYS);
      if (keysStorage) {
        dispatch(setMasterKeys(keysStorage));
      }

      const currentKeyStorage = await storage.getItem(storageKeys.CURRENTKEY);
      if (currentKeyStorage) {
        dispatch(setCurrentKeySlice(currentKeyStorage));
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

  const addMasterKey = async (newKey: IMasterKey) => {
    const parsed = JSON.parse(JSON.stringify(newKey));
    dispatch(addMasterKeySlice(parsed));
  };

  const setCurrentKey = async (newKey: IMasterKey) => {
    const parsed = JSON.parse(JSON.stringify(newKey));
    dispatch(setCurrentKeySlice(parsed));
  };

  const verifyMasterKey = (newKey: IMasterKey) => {
    const verified = masterKeys.find(k => k.mnemonic === newKey.mnemonic);
    if (verified) {
      const updated = masterKeys.map(k =>
        k.mnemonic === newKey.mnemonic ? {...k, verified: true} : k,
      );
      dispatch(setMasterKeys(updated));
      verified.verified = true;
      setCurrentKey(verified);
    }
  };

  return {
    currentKey,
    masterKeys,
    addMasterKey,
    verifyMasterKey,
    loadMasterKeys,
    setCurrentKey,
  };
};

export default useMasterKey;
