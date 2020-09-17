import { useState, useEffect, useRef, useContext } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Context } from '../store';
import { useOnOutsideClick } from '../utils/on-outside-click';
import { useAddQuery } from '../utils/add-query';
import { upcase } from '../utils/helpers';
import { Autocomplete } from '../components/layouts';
import { Button } from '../components/button';
import { Field } from '../components/fields';
import { NotFound } from '../components/not-found';

export default function ThemeSearch() {
  const themeRef = useRef(null);
  const [themeData, setThemeData] = useState([]);
  const [themeInput, setThemeInput] = useState('');
  const [themeDropdown, setThemeDropdown] = useState(false);

  useOnOutsideClick(themeRef, () => setThemeDropdown(false));

  useEffect(() => {
    fetchThemes();
  }, [themeInput]);

  async function fetchThemes() {
    try {
      const res = await axios.get('/api/themes', {
        params: {
          search: themeInput,
        },
      });
      setThemeData(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  const router = useRouter();

  useEffect(() => {
    const themeName = router.query.theme || 'Material';
    setThemeInput(upcase(themeName));
  }, [router.query.theme]);

  const [state, dispatch] = useContext(Context);

  const query = useAddQuery();

  function handleClick(theme) {
    setThemeInput(upcase(theme.name));
    setThemeDropdown(false);
    dispatch({
      type: 'SET_THEME',
      theme: theme.name,
    });
    query('theme', theme.name);
  }

  return (
    <div ref={themeRef} className="relative">
      <Field
        placeholder="Search by theme"
        value={themeInput}
        onChange={(e) => {
          setThemeInput(e.target.value);
          setThemeDropdown(true);
        }}
        onClick={() => setThemeDropdown(true)}
        icon="palette"
      />
      <Autocomplete isActive={themeDropdown}>
        {themeData.length ? (
          themeData.map((theme) => (
            <Button key={theme.id} onClick={() => handleClick(theme)}>
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
