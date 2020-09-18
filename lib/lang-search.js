import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useAddQuery } from '../utils/add-query';
import { useOnOutsideClick } from '../utils/on-outside-click';
import { dasherized } from '../utils/helpers';
import { Autocomplete } from '../components/layouts';
import { Button } from '../components/button';
import { Field } from '../components/fields';
import { NotFound } from '../components/not-found';

export default function LangSearch() {
  const langRef = useRef(null);
  const [langData, setLangData] = useState([]);
  const [langInput, setLangInput] = useState('');
  const [langPlaceholder, setLangPlaceholder] = useState('');
  const [langDropdown, setLangDropdown] = useState(false);

  useOnOutsideClick(langRef, () => setLangDropdown(false));

  useEffect(() => {
    fetchThemes();
  }, []);

  async function fetchThemes() {
    try {
      const res = await axios.get('/api/languages');
      setLangData(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  const router = useRouter();

  const langName = router.query.lang || 'JavaScript';
  useEffect(() => {
    setLangPlaceholder(langName);
  }, [router.query.lang]);

  const query = useAddQuery();

  function handleClick(lang) {
    setLangPlaceholder(lang.name);
    setLangInput('');
    setLangDropdown(false);
    query('lang', lang.name);
  }

  let filteredLang =
    langData.length &&
    langData.filter((lang) => {
      if (!lang) return lang;
      return (
        lang.searchTag.indexOf(dasherized(langInput)) !== -1 ||
        lang.searchTag.some((tag) => tag.startsWith(dasherized(langInput)))
      );
    });

  return (
    <div ref={langRef} className="relative">
      <Field
        label={langPlaceholder}
        aria-haspopup="true"
        aria-expanded={langDropdown ? 'true' : 'false'}
        value={langInput}
        onChange={(e) => {
          setLangInput(e.target.value);
          setLangDropdown(true);
          setLangPlaceholder('');
        }}
        onClick={() => {
          setLangDropdown(true);
        }}
        onFocus={() => {
          setLangDropdown(true);
          setLangInput('');
        }}
        icon="globe"
      />
      <Autocomplete isActive={langDropdown} role="menu">
        {filteredLang.length ? (
          filteredLang.map((lang) => (
            <Button
              key={lang.name}
              role="menuitem"
              onClick={() => handleClick(lang)}
              active={langName}
              title={lang.name}
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
