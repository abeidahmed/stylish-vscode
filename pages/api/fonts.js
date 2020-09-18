const fonts = [
  {
    name: 'fira-code',
  },
  {
    name: 'cascadia-code',
  },
  {
    name: 'jet-brains-mono',
  },
  {
    name: 'victor-mono',
  },
  {
    name: 'ubuntu-mono',
  },
  {
    name: 'ibm-plex-mono',
  },
  {
    name: 'space-mono',
  },
  {
    name: 'source-code-pro',
  },
  {
    name: 'inconsolata',
  },
];

export default (req, res) => {
  const sorted = fonts.sort((a, b) => (a.name > b.name ? 1 : -1));
  res.status(200).json(sorted);
};
