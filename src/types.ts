import {INetwork, IMasterKey} from '@bbachain/prolibbti';

export interface IAppState {
  loaded: boolean;
  initialized: boolean;
  theme: string;
  language: string;
}

export interface ISessionState {
  accounts: IMasterKey[];
  current: IMasterKey;
  network: INetwork;
}
