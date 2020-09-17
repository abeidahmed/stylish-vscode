// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { dasherized } from '../../utils/helpers';

const themes = [
  {
    id: 1,
    name: 'night-owl',
  },
  {
    id: 2,
    name: 'material',
  },
];

export default (req, res) => {
  let search = req.query.search;
  const filteredThemes = themes.filter(
    ({ name }) => name.toLowerCase().indexOf(dasherized(search)) !== -1
  );
  res.status(200).json(filteredThemes);
};
