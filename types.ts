export type Language = 'zh-CN' | 'zh-HK' | 'en';

export interface Translation {
  [key: string]: {
    'zh-CN': string;
    'zh-HK': string;
    'en': string;
  };
}

export interface MenuItem {
  id: string;
  iconName: string;
  labelKey: string;
  highlight?: boolean;
}

export interface WealthProduct {
  id: string;
  titleKey: string;
  rate: string;
  periodKey: string;
  minAmountKey: string;
  tags: string[];
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
