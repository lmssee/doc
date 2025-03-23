import { createContext } from 'react';

/*************************
 * 构建一个 context
 *************************/
export const loadingStateContext = createContext<{
  loadingState: 'parse' | 'loading';
  setLoadingState(value: 'parse' | 'loading'): void;
}>({ loadingState: 'parse', setLoadingState() {} });
