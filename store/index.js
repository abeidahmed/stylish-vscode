import { createContext, useReducer } from 'react';
import { reducer } from '../reducers';

const initialState = {
  fontSize: '16',
  lineHeight: '1.5',
  showLineNumber: false,
};

export const Context = createContext(initialState);

export default function Store({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}
