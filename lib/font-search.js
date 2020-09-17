import { useState, useEffect, useRef, useContext } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useOnOutsideClick } from '../utils/on-outside-click';
import { useAddQuery } from '../utils/add-query';
import { upcase } from '../utils/helpers';
import { Context } from '../store';
import { Autocomplete } from '../components/layouts';
import { Button } from '../components/button';
import { Field } from '../components/fields';
import { NotFound } from '../components/not-found';

export default function FontSearch() {
  const fontRef = useRef(null);
  const [fontData, setFontData] = useState([]);
  const [fontInput, setFontInput] = useState('');
  const [fontDropdown, setFontDropdown] = useState(false);

  useOnOutsideClick(fontRef, () => setFontDropdown(false));

  useEffect(() => {
    fetchThemes(fontInput);
  }, [fontInput]);

  async function fetchThemes(searchTerm) {
    try {
      const res = await axios.get('/api/fonts', {
        params: {
          search: searchTerm,
        },
      });
      setFontData(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  const router = useRouter();

  useEffect(() => {
    const fontName = router.query.font || 'Cascadia code';
    setFontInput(upcase(fontName));
  }, [router.query.font]);

  const [state, dispatch] = useContext(Context);

  const query = useAddQuery();

  function handleClick(font) {
    setFontInput(upcase(font.name));
    setFontDropdown(false);
    dispatch({
      type: 'SET_FONT',
      font: font.name,
    });
    query('font', font.name);
  }

  return (
    <div ref={fontRef} className="relative">
      <Field
        placeholder="Search by font"
        value={fontInput}
        onChange={(e) => {
          setFontInput(e.target.value);
          setFontDropdown(true);
        }}
        onFocus={() => {
          setFontDropdown(true);
          fetchThemes('');
        }}
        icon="font"
      />
      <Autocomplete isActive={fontDropdown}>
        {fontData.length ? (
          fontData.map((font) => (
            <Button key={font.id} onClick={() => handleClick(font)}>
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
