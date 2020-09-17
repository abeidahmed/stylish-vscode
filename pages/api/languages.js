import { dasherized } from '../../utils/helpers';

const languages = [
  {
    id: 1,
    name: 'ruby',
    demo: `
      def template_list
        component = Template::ComponentFinder.new
        page = Template::PageFinder.new
        [component, page]
      end

      def template_type
        template_list.find { |type| type.match?(@type) }
      end
    `,
  },
  {
    id: 2,
    name: 'javascript',
    demo: `
      const pluckDeep = key => obj => key.split('.').reduce((accum, key) => accum[key], obj)

      const compose = (...fns) => res => fns.reduce((accum, next) => next(accum), res)

      const unfold = (f, seed) => {
        const go = (f, seed, acc) => {
          const res = f(seed)
          return res ? go(f, res[1], acc.concat([res[0]])) : acc
        }
        return go(f, seed, [])
      }
    `,
  },
];

export default (req, res) => {
  let search = req.query.search;
  const filteredLang = languages.filter(
    ({ name }) => name.toLowerCase().indexOf(dasherized(search)) !== -1
  );
  res.status(200).json(filteredLang);
};
