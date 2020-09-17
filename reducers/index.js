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
        lang: {
          name: action.langName,
          demo: action.langDemo,
        },
      };
    case 'SET_FONT':
      return {
        ...state,
        font: action.font,
      };
  }
}
