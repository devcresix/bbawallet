import {INetwork, IMasterKey} from '@bbachain/masterkey';
import {Account} from '@bbachain/masterkey/dist/Account';

export interface IAddress {
  name: string;
  address: string;
  image?: any;
}

export interface IAppState {
  loaded: boolean;
  initialized: boolean;
  theme: string;
  language: string;
}

export interface ISessionState {
  network: INetwork;
  masterKeys: IMasterKey[];
  currentKey: IMasterKey;
  account: Account;
  addresses: IAddress[];
}
