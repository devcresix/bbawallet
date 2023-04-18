import {INetwork, IMasterKey} from '@bbachain/prolibbti';
import {Account} from '@bbachain/prolibbti/dist/Account';

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
}
