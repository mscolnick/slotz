import { createContext } from 'react';
import { SlotzEmitter } from './events';
import { IManager } from './types';

export interface ISlotzContext {
  manager: IManager;
  bus: SlotzEmitter;
}

export const SlotzContext = createContext<ISlotzContext>(null!);
