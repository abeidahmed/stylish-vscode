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

export default function FontSearch() {
  const fontRef = useRef(null);
  const [fontData, setFontData] = useState([]);
  const [fontInput, setFontInput] = useState('');
  const [fontPlaceholder, setFontPlaceholder] = useState('');
  const [fontDropdown, setFontDropdown] = useState(false);

  useOnOutsideClick(fontRef, () => setFontDropdown(false));

  useEffect(() => {
    fetchThemes();
  }, []);

  async function fetchThemes() {
    try {
      const res = await axios.get('/api/fonts');
      setFontData(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  const router = useRouter();

  useEffect(() => {
    const fontName = router.query.font || 'Cascadia code';
    setFontPlaceholder(upcase(fontName));
  }, [router.query.font]);

  const query = useAddQuery();

  function handleClick(font) {
    setFontPlaceholder(upcase(font.name));
    setFontInput('');
    setFontDropdown(false);
    query('font', font.name);
  }

  let filteredFonts =
    fontData.length &&
    fontData.filter((font) => {
      return font.name.indexOf(dasherized(fontInput)) !== -1;
    });

  return (
    <div ref={fontRef} className="relative">
      <Field
        label={fontPlaceholder}
        aria-haspopup="true"
        aria-expanded={fontDropdown ? 'true' : 'false'}
        value={fontInput}
        onChange={(e) => {
          setFontInput(e.target.value);
          setFontDropdown(true);
          setFontPlaceholder('');
        }}
        onClick={() => {
          setFontDropdown(true);
        }}
        onFocus={() => {
          setFontDropdown(true);
          setFontInput('');
        }}
        icon="font"
      />
      <Autocomplete isActive={fontDropdown} role="menu">
        {filteredFonts.length ? (
          filteredFonts.map((font) => (
            <Button
              key={font.id}
              role="menuitem"
              onClick={() => handleClick(font)}
              active={upcase(router.query.font)}
              title={upcase(font.name)}
            >
              {upcase(font.name)}
            </Button>
          ))
        ) : (
          <NotFound text="Sorry, no font found!" />
        )}
      </Autocomplete>
    </div>
  );
}
