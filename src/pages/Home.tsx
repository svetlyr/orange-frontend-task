import React, { useContext, useState } from 'react';

import { FavoritesContext } from '@context';
import { useBooksSearch, useBooks } from '@hooks';
import { SearchBox, Spinner, Card, Modal } from '@components';

const Home: React.FC = () => {
  const { favorites } = useContext(FavoritesContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedBookId, setSelectedBookId] = useState<string>('');

  const { query, handleSearchChange, debouncedQuery } = useBooksSearch();
  const { books, isLoading } = useBooks(debouncedQuery);

  const handleCloseModal = () => {
    setSelectedBookId('');
    setIsOpen(false);
  };

  const handleOpenModal = (id: string) => {
    setSelectedBookId(id);
    setIsOpen(true);
  };

  return (
    <>
      <div className="flex w-full justify-center">
        <SearchBox query={query} onSearch={handleSearchChange} />
      </div>

      {isOpen && (
        <Modal
          favorites={favorites}
          bookId={selectedBookId}
          isOpen={isOpen}
          onClose={handleCloseModal}
        />
      )}

      {isLoading ? (
        <div className="flex h-screen w-full items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {books.map((book) => (
            <Card
              id={book.id}
              key={book.id}
              title={book.volumeInfo.title}
              author={book.volumeInfo.authors}
              onClick={() => handleOpenModal(book.id)}
              isFavorite={favorites?.includes(book.id)}
              description={book.volumeInfo.description}
              img={book.volumeInfo.imageLinks?.thumbnail}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
