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
  const sorted = languages.sort((a, b) => (a.name > b.name ? 1 : -1));
  res.status(200).json(sorted);
};
