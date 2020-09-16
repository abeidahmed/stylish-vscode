// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const themes = [
  {
    id: 1,
    name: 'Night Owl',
    dasherizedName: 'night-owl',
  },
  {
    id: 2,
    name: 'Material Theme',
    dasherizedName: 'material-theme',
  },
];

export default (req, res) => {
  let search = req.query.search;
  const filteredThemes = themes.filter(
    (theme) => theme.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
  );
  res.status(200).json(filteredThemes);
};
