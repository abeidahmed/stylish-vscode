import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Autocomplete } from '../components/layouts';
import { Button } from '../components/button';
import { Field } from '../components/fields';
import { NotFound } from '../components/not-found';
import { useOnOutsideClick } from '../utils/on-outside-click';

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
            <Button
              key={theme.id}
              onClick={() => {
                setThemeInput(theme.name);
                setThemeDropdown(false);
              }}
            >
              {theme.name}
            </Button>
          ))
        ) : (
          <NotFound text="Sorry, no theme found!" />
        )}
      </Autocomplete>
    </div>
  );
}
