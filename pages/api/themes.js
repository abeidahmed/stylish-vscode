const themes = [
  {
    name: 'ambiance',
    type: 'dark',
  },
  {
    name: 'ayu-dark',
    type: 'dark',
  },
  {
    name: 'ayu-mirage',
    type: 'dark',
  },
  {
    name: 'base16-dark',
    type: 'dark',
  },
  {
    name: 'base16-light',
    type: 'light',
  },
  {
    name: 'bespin',
    type: 'dark',
  },
  {
    name: 'blackboard',
    type: 'dark',
  },
  {
    name: 'cobalt',
    type: 'dark',
  },
  {
    name: 'colorforth',
    type: 'dark',
  },
  {
    name: 'darcula',
    type: 'dark',
  },
  {
    name: 'dracula',
    type: 'dark',
  },
  {
    name: 'duotone-dark',
    type: 'dark',
  },
  {
    name: 'duotone-light',
    type: 'light',
  },
  {
    name: 'eclipse',
    type: 'light',
  },
  {
    name: 'elegant',
    type: 'light',
  },
  {
    name: 'erlang-dark',
    type: 'dark',
  },
  {
    name: 'gruvbox-dark',
    type: 'dark',
  },
  {
    name: 'hopscotch',
    type: 'dark',
  },
  {
    name: 'material',
    type: 'dark',
  },
  {
    name: 'material-darker',
    type: 'dark',
  },
  {
    name: 'material-ocean',
    type: 'dark',
  },
  {
    name: 'material-palenight',
    type: 'dark',
  },
  {
    name: 'mbo',
    type: 'dark',
  },
  {
    name: 'mdn-like',
    type: 'light',
  },
  {
    name: 'midnight',
    type: 'dark',
  },
  {
    name: 'monokai',
    type: 'dark',
  },
  {
    name: 'moxer',
    type: 'dark',
  },
  {
    name: 'neat',
    type: 'light',
  },
  {
    name: 'nord',
    type: 'dark',
  },
  {
    name: 'oceanic-next',
    type: 'dark',
  },
  {
    name: 'panda-syntax',
    type: 'dark',
  },
  {
    name: 'paraiso-dark',
    type: 'dark',
  },
  {
    name: 'paraiso-light',
    type: 'light',
  },
  {
    name: 'pastel-on-dark',
    type: 'dark',
  },
  {
    name: 'railscasts',
    type: 'dark',
  },
  {
    name: 'rubyblue',
    type: 'dark',
  },
  {
    name: 'seti',
    type: 'dark',
  },
  {
    name: 'shadowfox',
    type: 'dark',
  },
  {
    name: 'solarized',
    type: 'light',
  },
  {
    name: 'ssms',
    type: 'light',
  },
  {
    name: 'the-matrix',
    type: 'dark',
  },
  {
    name: 'tomorrow-night-bright',
    type: 'dark',
  },
  {
    name: 'tomorrow-night-eighties',
    type: 'dark',
  },
  {
    name: 'ttcn',
    type: 'light',
  },
  {
    name: 'twilight',
    type: 'dark',
  },
  {
    name: 'vibrant-ink',
    type: 'dark',
  },
  {
    name: 'xq-dark',
    type: 'dark',
  },
  {
    name: 'xq-light',
    type: 'light',
  },
  {
    name: 'yeti',
    type: 'light',
  },
  {
    name: 'yonce',
    type: 'dark',
  },
  {
    name: 'zenburn',
    type: 'dark',
  },
];

export default (req, res) => {
  const { showDarkTheme, showLightTheme } = req.query;
  let showDark = JSON.parse(showDarkTheme);
  let showLight = JSON.parse(showLightTheme);

  const filteredTheme = themes.filter((theme) => {
    if (showDark && showLight) {
      return theme;
    } else if (showDark && !showLight) {
      return theme.type === 'dark';
    } else if (!showDark && showLight) {
      return theme.type === 'light';
    } else {
      return [];
    }
  });

  const sorted = filteredTheme.sort((a, b) => (a.name > b.name ? 1 : -1));
  res.status(200).json(sorted);
};
