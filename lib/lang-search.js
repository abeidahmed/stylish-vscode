import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useAddQuery } from '../utils/add-query';
import { useOnOutsideClick } from '../utils/on-outside-click';
import { Autocomplete } from '../components/layouts';
import { Button } from '../components/button';
import { Field } from '../components/fields';
import { NotFound } from '../components/not-found';

export default function LangSearch() {
  const langRef = useRef(null);
  const [langData, setLangData] = useState([]);
  const [langInput, setLangInput] = useState('');
  const [langDropdown, setLangDropdown] = useState(false);

  useOnOutsideClick(langRef, () => setLangDropdown(false));

  useEffect(() => {
    fetchThemes(langInput);
  }, [langInput]);

  async function fetchThemes(searchTerm) {
    try {
      const res = await axios.get('/api/languages', {
        params: {
          search: searchTerm,
        },
      });
      setLangData(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  const router = useRouter();

  useEffect(() => {
    const langName = router.query.lang || 'JavaScript';
    setLangInput(langName);
  }, [router.query.lang]);

  const query = useAddQuery();

  function handleClick(lang) {
    setLangInput(lang.name);
    setLangDropdown(false);
    query('lang', lang.name);
  }

  return (
    <div ref={langRef} className="relative">
      <Field
        label="Search languages"
        aria-haspopup="true"
        aria-expanded={langDropdown ? 'true' : 'false'}
        placeholder="Search by language"
        value={langInput}
        onChange={(e) => {
          setLangInput(e.target.value);
          setLangDropdown(true);
        }}
        onClick={() => {
          setLangDropdown(true);
          fetchThemes('');
        }}
        onFocus={() => {
          setLangDropdown(true);
          fetchThemes('');
        }}
        icon="globe"
      />
      <Autocomplete isActive={langDropdown} role="menu">
        {langData.length ? (
          langData.map((lang) => (
            <Button
              key={lang.id}
              role="menuitem"
              onClick={() => handleClick(lang)}
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
