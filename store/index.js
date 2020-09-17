import { createContext, useReducer } from 'react';
import { reducer } from '../reducers';

const initialState = {
  theme: '',
  font: '',
  lang: {
    name: 'javascript',
    demo: `
    const pluckDeep = key => obj => key.split('.').reduce((accum, key) => accum[key], obj)

    const compose = (...fns) => res => fns.reduce((accum, next) => next(accum), res)

    const unfold = (f, seed) => {
      const go = (f, seed, acc) => {
        const res = f(seed)
        return res ? go(f, res[1], acc.concat([res[0]])) : acc
      }
      return go(f, seed, [])
    }`,
  },
};

export const Context = createContext(initialState);

export default function Store({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}
