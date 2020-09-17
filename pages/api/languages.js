import { dasherized } from '../../utils/helpers';

const languages = [
  {
    id: 1,
    name: 'Ruby',
    searchTag: ['ruby', 'ruby-on-rails', 'rails', 'rb'],
  },
  {
    id: 2,
    name: 'JavaScript',
    searchTag: ['js', 'javascript'],
  },
];

export default (req, res) => {
  let search = req.query.search;
  const filteredLang = filterable(search);
  const sorted = filteredLang.sort((a, b) => (a.name > b.name ? 1 : -1));
  res.status(200).json(sorted);
};

function filterable(search) {
  return languages.filter((ele) => {
    if (!search) return ele;
    return (
      ele.searchTag.indexOf(dasherized(search)) !== -1 ||
      ele.searchTag.some((tag) => tag.startsWith(dasherized(search)))
    );
  });
}
