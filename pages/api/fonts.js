const fonts = [
  {
    name: 'fira-code',
  },
  {
    name: 'cascadia-code',
  },
];

export default (req, res) => {
  const sorted = fonts.sort((a, b) => (a.name > b.name ? 1 : -1));
  res.status(200).json(sorted);
};
