import {IMasterKey, INetwork, asignMasterKey} from '@bbachain/prolibbti';

const AccountUtils = {
  getDeriveAccount: (account: IMasterKey, network: INetwork) => {
    const masterkey = asignMasterKey(account);
    return masterkey.derive(network);
  },
  getDeriveAddress: (account: IMasterKey, network: INetwork): string => {
    const derived = AccountUtils.getDeriveAccount(account, network);
    const address = derived.toAddress();
    return address;
  },
  getDeriveAddressBalance: (account: IMasterKey, network: INetwork) => {
    const masterkey = asignMasterKey(account);
    const derived = masterkey.derive(network);
    const balance = derived.getBalance();
    return balance;
  },
};

export default AccountUtils;
