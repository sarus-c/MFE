import { ReactNode } from 'react';

export interface Article {
  id: string | number;
  img: string;
  title: string;
  body: string | ReactNode;
  action?: string | ReactNode;
  date?: string;
}
