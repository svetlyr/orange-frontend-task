import { useSearchParams } from 'react-router-dom';
import { useState, useEffect, type ChangeEventHandler } from 'react';

import { useDebounceCallback } from './useDebounce';

export const useBooksSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('search') || '');
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  const updateSearchParams = (newQuery: string) => {
    setSearchParams({ search: newQuery || '' }, { replace: true });
    setDebouncedQuery(newQuery);
  };

  const debouncedSetSearchParams = useDebounceCallback(updateSearchParams, 500);

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    if (query !== searchParams.get('search')) {
      debouncedSetSearchParams(query);
    }
  }, [query, searchParams]);

  return { query, handleSearchChange, debouncedQuery };
};
