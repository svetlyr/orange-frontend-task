import { BookAPi, type BookDto } from '@api';
import { Card } from '@components';
import React, { useEffect, useState, type PropsWithChildren } from 'react';

type Props = {
  bookId: string;
  isOpen: boolean;
  favorites: string[];
  onClose: () => void;
};

export const Modal: React.FC<PropsWithChildren<Props>> = ({
  bookId,
  isOpen,
  onClose,
  favorites,
}) => {
  const bookApi = BookAPi.getInstance();
  const [book, setBook] = useState<BookDto>();
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const fetchBook = async () => {
      const data = await bookApi.getVolume(bookId);
      setBook(data);
    };

    fetchBook();
  }, []);

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            onKeyDown={handleKeyDown}
            aria-labelledby="modal-title"
            onClick={handleBackdropClick}
            aria-describedby="modal-description"
            className="md:w-42 rounded-lg bg-white p-4"
          >
            <div className="flex justify-end">
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={onClose}
                aria-label="Close"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            {book && (
              <Card
                id={book.id}
                title={book.volumeInfo.title}
                author={book.volumeInfo.authors}
                isFavorite={favorites?.includes(book.id)}
                description={book.volumeInfo.description}
                img={book.volumeInfo.imageLinks?.thumbnail}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};
