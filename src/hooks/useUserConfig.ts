import {useState, useEffect} from 'react';
import STORAGE_KEYS from '../config/storageKeys';
import storage from '../utils/storage';

const useUserConfig = () => {
  const [userConfig, setUserConfig] = useState(null);

  useEffect(() => {
    storage.getItem(STORAGE_KEYS.USER_CONFIG).then(config => {
      if (!config) {
        config = {};
      }
      storage.setItem(STORAGE_KEYS.USER_CONFIG, config);
      setUserConfig(config);
    });
  }, []);

  return {userConfig};
};

export default useUserConfig;
