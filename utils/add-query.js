import { useCallback } from 'react';
import { useRouter } from 'next/router';

export function useAddQuery() {
  const router = useRouter();

  const addQuery = useCallback((key, value) => {
    router.push(
      {
        pathname: '/',
        query: {
          ...router.query,
          [key]: value,
        },
      },
      undefined,
      { shallow: true }
    );
  });

  return addQuery;
}
