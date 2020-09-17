// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { dasherized } from '../../utils/helpers';

const themes = [
  {
    name: 'ambiance',
  },
  {
    name: 'ayu-dark',
  },
  {
    name: 'ayu-mirage',
  },
  {
    name: 'base16-dark',
  },
  {
    name: 'base16-light',
  },
  {
    name: 'bespin',
  },
  {
    name: 'blackboard',
  },
  {
    name: 'cobalt',
  },
  {
    name: 'colorforth',
  },
  {
    name: 'darcula',
  },
  {
    name: 'dracula',
  },
  {
    name: 'duotone-dark',
  },
  {
    name: 'duotone-light',
  },
  {
    name: 'eclipse',
  },
  {
    name: 'elegant',
  },
  {
    name: 'erlang-dark',
  },
  {
    name: 'gruvbox-dark',
  },
  {
    name: 'hopscotch',
  },
  {
    name: 'material',
  },
  {
    name: 'material-darker',
  },
  {
    name: 'material-ocean',
  },
  {
    name: 'material-palenight',
  },
  {
    name: 'mbo',
  },
  {
    name: 'mdn-like',
  },
  {
    name: 'midnight',
  },
  {
    name: 'monokai',
  },
  {
    name: 'moxer',
  },
  {
    name: 'neat',
  },
  {
    name: 'nord',
  },
  {
    name: 'oceanic-next',
  },
  {
    name: 'panda-syntax',
  },
  {
    name: 'paraiso-dark',
  },
  {
    name: 'paraiso-light',
  },
  {
    name: 'pastel-on-dark',
  },
  {
    name: 'railscasts',
  },
  {
    name: 'rubyblue',
  },
  {
    name: 'seti',
  },
  {
    name: 'shadowfox',
  },
  {
    name: 'solarized',
  },
  {
    name: 'ssms',
  },
  {
    name: 'the-matrix',
  },
  {
    name: 'tomorrow-night-bright',
  },
  {
    name: 'tomorrow-night-eighties',
  },
  {
    name: 'ttcn',
  },
  {
    name: 'twilight',
  },
  {
    name: 'vibrant-ink',
  },
  {
    name: 'xq-dark',
  },
  {
    name: 'xq-light',
  },
  {
    name: 'yeti',
  },
  {
    name: 'yonce',
  },
  {
    name: 'zenburn',
  },
];

export default (req, res) => {
  let search = req.query.search;
  const filteredThemes = themes.filter(
    ({ name }) => name.toLowerCase().indexOf(dasherized(search)) !== -1
  );
  const sorted = filteredThemes.sort((a, b) => (a.name > b.name ? 1 : -1));
  res.status(200).json(sorted);
};
