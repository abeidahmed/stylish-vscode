import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Autocomplete } from '../components/layouts';
import { Button } from '../components/button';
import { Field } from '../components/fields';
import { NotFound } from '../components/not-found';
import { useOnOutsideClick } from '../utils/on-outside-click';

export default function FontSearch() {
  const fontRef = useRef(null);
  const [fontData, setFontData] = useState([]);
  const [fontInput, setFontInput] = useState('');
  const [fontDropdown, setFontDropdown] = useState(false);

  useOnOutsideClick(fontRef, () => setFontDropdown(false));

  useEffect(() => {
    fetchThemes();
  }, [fontInput]);

  async function fetchThemes() {
    try {
      const res = await axios.get('/api/fonts', {
        params: {
          search: fontInput,
        },
      });
      setFontData(res.data);
    } catch (err) {
      console.log(err);
    }
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
        onClick={() => setFontDropdown(true)}
        icon="font"
      />
      <Autocomplete isActive={fontDropdown}>
        {fontData.length ? (
          fontData.map((font) => (
            <Button
              key={font.id}
              onClick={() => {
                setFontInput(font.name);
                setFontDropdown(false);
              }}
            >
              {font.name}
            </Button>
          ))
        ) : (
          <NotFound text="Sorry, no font found!" />
        )}
      </Autocomplete>
    </div>
  );
}
