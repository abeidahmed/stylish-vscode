import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useOnOutsideClick } from '../utils/on-outside-click';
import { useAddQuery } from '../utils/add-query';
import { upcase, dasherized } from '../utils/helpers';
import { Autocomplete } from '../components/layouts';
import { Button } from '../components/button';
import { Field } from '../components/fields';
import { NotFound } from '../components/not-found';

export default function ThemeSearch() {
  const themeRef = useRef(null);
  const [themeData, setThemeData] = useState([]);
  const [themeInput, setThemeInput] = useState('');
  const [themePlaceholder, setThemePlaceholder] = useState('');
  const [themeDropdown, setThemeDropdown] = useState(false);

  useOnOutsideClick(themeRef, () => setThemeDropdown(false));

  useEffect(() => {
    fetchThemes();
  }, []);

  async function fetchThemes() {
    try {
      const res = await axios.get('/api/themes');
      setThemeData(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  const router = useRouter();

  const themeName = router.query.theme || 'Material';
  useEffect(() => {
    setThemePlaceholder(upcase(themeName));
  }, [router.query.theme]);

  const query = useAddQuery();

  function handleClick(theme) {
    setThemePlaceholder(upcase(theme.name));
    setThemeInput('');
    setThemeDropdown(false);
    query('theme', theme.name);
  }

  let filteredTheme =
    themeData.length &&
    themeData.filter((theme) => {
      return theme.name.indexOf(dasherized(themeInput)) !== -1;
    });

  return (
    <div ref={themeRef} className="relative">
      <Field
        label={themePlaceholder}
        aria-haspopup="true"
        aria-expanded={themeDropdown ? 'true' : 'false'}
        value={themeInput}
        onChange={(e) => {
          setThemeInput(e.target.value);
          setThemeDropdown(true);
          setThemePlaceholder('');
        }}
        onClick={() => {
          setThemeDropdown(true);
        }}
        onFocus={() => {
          setThemeDropdown(true);
          setThemeInput('');
        }}
        icon="palette"
      />
      <Autocomplete isActive={themeDropdown} role="menu">
        {filteredTheme.length ? (
          filteredTheme.map((theme) => (
            <Button
              key={theme.name}
              role="menuitem"
              onClick={() => handleClick(theme)}
              active={upcase(themeName)}
              title={upcase(theme.name)}
            >
              {upcase(theme.name)}
            </Button>
          ))
        ) : (
          <NotFound text="Sorry, no theme found!" />
        )}
      </Autocomplete>
    </div>
  );
}
