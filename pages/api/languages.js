const languages = [
  {
    name: 'Ruby',
    searchTag: ['ruby', 'ruby-on-rails', 'rails', 'rb'],
  },
  {
    name: 'JavaScript',
    searchTag: ['js', 'javascript'],
  },
  {
    name: 'CSS',
    searchTag: ['css'],
  },
  {
    name: 'Clojure',
    searchTag: ['clojure'],
  },
  {
    name: 'Docker file',
    searchTag: ['docker', 'docker-file'],
  },
  {
    name: 'Erlang',
    searchTag: ['erlang'],
  },
  {
    name: 'PHP',
    searchTag: ['php', 'laravel'],
  },
  {
    name: 'Python',
    searchTag: ['python', 'django'],
  },
  {
    name: 'R',
    searchTag: ['r'],
  },
  {
    name: 'Rust',
    searchTag: ['rust'],
  },
  {
    name: 'SQL',
    searchTag: ['sql', 'database'],
  },
  {
    name: 'Swift',
    searchTag: ['swift'],
  },
];

export default (req, res) => {
  const sorted = languages.sort((a, b) => (a.name > b.name ? 1 : -1));
  res.status(200).json(sorted);
};
