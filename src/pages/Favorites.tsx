import React, { useContext, useEffect, useState } from 'react';

import { Card } from '@components';
import { FavoritesContext } from '@context';
import { BookAPi, type BookDto } from '@api';

const FavoritesPage: React.FC = () => {
  const { favorites } = useContext(FavoritesContext);
  const bookApi = BookAPi.getInstance();
  const [favoriteBooks, setFavoriteBooks] = useState<BookDto[]>([]);

  useEffect(() => {
    const fetchBookData = async (id: string) => {
      const data = await bookApi.getVolume(id);

      return data;
    };

    const fetchAllBooks = async () => {
      const bookPromises = favorites.map((id) => fetchBookData(id));
      const bookDataArray = await Promise.all(bookPromises);

      setFavoriteBooks(bookDataArray.filter(Boolean));
    };

    fetchAllBooks();
  }, [favorites]);

  console.log(favoriteBooks);

  return (
    <div className="container mx-auto p-4">
      <h2 className="m-6 text-2xl font-bold text-green-700">My Favorites</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {favoriteBooks.map((book) => (
          <Card
            isFavorite
            id={book.id}
            key={book.id}
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors}
            description={book.volumeInfo.description}
            img={book.volumeInfo.imageLinks?.thumbnail}
          />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
