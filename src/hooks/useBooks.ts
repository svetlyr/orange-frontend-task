import { BookAPi, type BookDto } from '@api';

import { useState, useEffect } from 'react';

export const useBooks = (query: string = '') => {
  const [books, setBooks] = useState<BookDto[]>([]);
  const [error, setError] = useState<unknown>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const bookApi = BookAPi.getInstance();

  useEffect(() => {
    const fetchData = async () => {
      if (!query) return;
      setIsLoading(true);

      try {
        const data = await bookApi.searchVolumes(query);

        setBooks(data);
      } catch (error: unknown) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return { books, isLoading, error };
};
