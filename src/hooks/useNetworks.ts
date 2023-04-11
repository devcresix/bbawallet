import {useDispatch, useSelector} from 'react-redux';
import {DNETWORK, INetwork} from '@bbachain/prolibbti';

import storageKeys from '../config/storageKeys';
import {setNetwork as setNetworkStore} from '../store/sessionSlice';
import storage from '../utils/storage';
import {RootState} from '../store';

const useNetworks = () => {
  const dispatch = useDispatch();
  const {network} = useSelector((state: RootState) => state.session);

  const loadNetwork = async () => {
    try {
      let networkStorage = await storage.getItem(storageKeys.CURRENT_NETWORK);
      if (!networkStorage) {
        networkStorage = DNETWORK;
      }
      dispatch(setNetworkStore(networkStorage));
    } finally {
    }
  };

  const setNetwork = (n: INetwork) => {
    dispatch(setNetworkStore(n));
  };

  return {
    network,
    loadNetwork,
    setNetwork,
  };
};

export default useNetworks;
