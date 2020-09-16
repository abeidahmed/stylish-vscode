const fonts = [
  {
    id: 1,
    name: 'Fira code',
    dasherizedName: 'fira-code',
  },
  {
    id: 2,
    name: 'Cascadia code',
    dasherizedName: 'cascadia-code',
  },
];

export default (req, res) => {
  let search = req.query.search;
  const filteredFonts = fonts.filter(
    ({ name }) => name.toLowerCase().indexOf(search.toLowerCase()) !== -1
  );
  res.status(200).json(filteredFonts);
};
