const languages = [
  {
    id: 1,
    name: 'Ruby',
    dasherizedName: 'ruby',
  },
  {
    id: 2,
    name: 'Javascript',
    dasherizedName: 'js',
  },
];

export default (req, res) => {
  let search = req.query.search;
  const filteredLang = languages.filter(
    ({ name }) => name.toLowerCase().indexOf(search.toLowerCase()) !== -1
  );
  res.status(200).json(filteredLang);
};
