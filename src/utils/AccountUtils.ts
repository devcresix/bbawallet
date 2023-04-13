import {IMasterKey, INetwork, asignMasterKey} from '@bbachain/prolibbti';

const AccountUtils = {
  getDeriveAddress: (account: IMasterKey, network: INetwork): string => {
    const masterkey = asignMasterKey(account);
    const derived = masterkey.derive(network);
    const address = derived.toAddress();
    return address;
  },
};

export default AccountUtils;
