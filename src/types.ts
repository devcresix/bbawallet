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
  current: IAccountState;
  accounts: IAccountState[];
}

export interface IBarLabel {
  color: any;
  children: any;
}

export interface IAccount {
  id: number;
  networksAccounts: any;
}

export interface ITextSeed {
  type: any;
  color: any;
  inverse: any;
  center: any;
  bold: any;
  italic: any;
  uppercase: any;
  nospace: any;
  style: any;
}
