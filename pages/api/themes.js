// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { dasherized } from '../../utils/helpers';

const themes = [
  {
    id: 1,
    name: 'dracula',
  },
  {
    id: 2,
    name: 'material',
  },
  {
    id: 3,
    name: 'ayu-dark',
  },
  {
    id: 4,
    name: 'ayu-mirage',
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
