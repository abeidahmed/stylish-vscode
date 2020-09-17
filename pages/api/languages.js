import { dasherized } from '../../utils/helpers';

const languages = [
  {
    id: 1,
    name: 'Ruby',
  },
  {
    id: 2,
    name: 'JavaScript',
  },
];

export default (req, res) => {
  let search = req.query.search;
  const filteredLang = languages.filter(
    ({ name }) => name.toLowerCase().indexOf(dasherized(search)) !== -1
  );
  const sorted = filteredLang.sort((a, b) => (a.name > b.name ? 1 : -1));
  res.status(200).json(sorted);
};
