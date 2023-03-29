export interface IAppState {
  loading: boolean;
  theme: string;
}

// UI Component Types
export interface IBarIcon {
  color: any;
  size: any;
  name: any;
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
