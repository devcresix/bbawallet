export interface IAppState {
  loader: boolean;
  theme: string;
}

export interface IThemeState {
  theme: any;
}

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
