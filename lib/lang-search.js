import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Autocomplete } from '../components/layouts';
import { Button } from '../components/button';
import { Field } from '../components/fields';
import { NotFound } from '../components/not-found';
import { useOnOutsideClick } from '../utils/on-outside-click';

export default function LangSearch() {
  const langRef = useRef(null);
  const [langData, setLangData] = useState([]);
  const [langInput, setLangInput] = useState('');
  const [langDropdown, setLangDropdown] = useState(false);

  useOnOutsideClick(langRef, () => setLangDropdown(false));

  useEffect(() => {
    fetchThemes();
  }, [langInput]);

  async function fetchThemes() {
    try {
      const res = await axios.get('/api/languages', {
        params: {
          search: langInput,
        },
      });
      setLangData(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div ref={langRef} className="relative">
      <Field
        placeholder="Search by language"
        value={langInput}
        onChange={(e) => {
          setLangInput(e.target.value);
          setLangDropdown(true);
        }}
        onClick={() => setLangDropdown(true)}
        icon="globe"
      />
      <Autocomplete isActive={langDropdown}>
        {langData.length ? (
          langData.map((lang) => (
            <Button
              key={lang.id}
              onClick={() => {
                setLangInput(lang.name);
                setLangDropdown(false);
              }}
            >
              {lang.name}
            </Button>
          ))
        ) : (
          <NotFound text="Sorry, no language found!" />
        )}
      </Autocomplete>
    </div>
  );
}
