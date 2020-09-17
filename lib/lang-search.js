import { useState, useEffect, useRef, useContext } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Context } from '../store';
import { useAddQuery } from '../utils/add-query';
import { useOnOutsideClick } from '../utils/on-outside-click';
import { upcase } from '../utils/helpers';
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

  const router = useRouter();

  useEffect(() => {
    const langName = router.query.lang || 'Javascript';
    setLangInput(upcase(langName));
  }, [router.query.lang]);

  const [state, dispatch] = useContext(Context);

  const query = useAddQuery();

  function handleClick(lang) {
    setLangInput(upcase(lang.name));
    setLangDropdown(false);
    dispatch({
      type: 'SET_LANG',
      lang: lang.name,
    });
    query('lang', lang.name);
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
            <Button key={lang.id} onClick={() => handleClick(lang)}>
              {upcase(lang.name)}
            </Button>
          ))
        ) : (
          <NotFound text="Sorry, no language found!" />
        )}
      </Autocomplete>
    </div>
  );
}
