import {INetwork} from 'prolibbti';

export interface IAppState {
  loaded: boolean;
  initialized: boolean;
  theme: string;
  language: string;
}

export interface IAccountState {
  id: string;
  name: string;
  mnemonic: string;
  verified: boolean;
}

export interface ISessionState {
  accounts: IAccountState[];
  current: IAccountState;
  network: INetwork;
}
