export function reducer(state, action) {
  switch (action.type) {
    case 'SET_THEME':
      return {
        ...state,
        theme: action.theme,
      };
    case 'SET_LANG':
      return {
        ...state,
        lang: action.lang,
      };
    case 'SET_FONT':
      return {
        ...state,
        font: action.font,
      };
  }
}
