import {useDispatch, useSelector} from 'react-redux';
import {IMasterKey, INetwork, asignMasterKey} from '@bbachain/masterkey';
import {setAccount} from '../store/sessionSlice';
import {RootState} from '../store';

const useAccounts = () => {
  const dispatch = useDispatch();
  const {account} = useSelector((state: RootState) => state.session);

  const getAccountFromKey = (masterKey: IMasterKey, network: INetwork) => {
    const asigned = asignMasterKey(masterKey);
    const derived = asigned.derive(network);
    dispatch(setAccount(derived));
  };

  return {
    account,
    getAccountFromKey,
  };
};

export default useAccounts;
