import { dasherized } from '../../utils/helpers';

const fonts = [
  {
    id: 1,
    name: 'fira-code',
  },
  {
    id: 2,
    name: 'cascadia-code',
  },
];

export default (req, res) => {
  let search = req.query.search;
  const filteredFonts = fonts.filter(
    ({ name }) => name.toLowerCase().indexOf(dasherized(search)) !== -1
  );
  res.status(200).json(filteredFonts);
};
