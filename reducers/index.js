export function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_FONT_SIZE':
      return {
        ...state,
        fontSize: action.fontSize,
      };
    case 'UPDATE_LINE_HEIGHT':
      return {
        ...state,
        lineHeight: action.lineHeight,
      };
    case 'TOGGLE_LINE_NUMBER':
      return {
        ...state,
        showLineNumber: action.showLineNumber,
      };
    case 'TOGGLE_DARK_THEME':
      return {
        ...state,
        showDarkTheme: action.showDarkTheme,
      };
    case 'TOGGLE_LIGHT_THEME':
      return {
        ...state,
        showLightTheme: action.showLightTheme,
      };
  }
}
