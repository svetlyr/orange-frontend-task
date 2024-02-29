import React, { useContext } from 'react';

import { FavoriteIcon } from './FavoritesIcon';

import { FavoritesContext } from '@context';

type CardProps = {
  id: string;
  img: string;
  title: string;
  author: string[];
  description: string;
  isFavorite?: boolean;
  onClick?: () => void;
};

export const Card: React.FC<CardProps> = ({
  id,
  img,
  title,
  author,
  onClick,
  isFavorite,
  description,
}) => {
  const { addFavorite, removeFavorite } = useContext(FavoritesContext);

  const handleClick = () => {
    if (isFavorite) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  };

  return (
    <div
      onClick={onClick}
      className="relative m-3 flex max-w-sm flex-col overflow-hidden rounded bg-white shadow-lg"
    >
      <FavoriteIcon
        onClick={handleClick}
        isFavorite={isFavorite}
        className="absolute right-2 top-2 h-10"
      />
      <img className="h-80 object-cover" src={img} alt={title} />
      <div className="flex flex-grow flex-col gap-2 p-4">
        <div>
          <div className="mb-2 text-xl font-bold text-gray-800">{title}</div>
          <div className=" text-l font-bold text-gray-700">{author && author.join(', ')}</div>
        </div>
        <p className="text-base text-gray-600">
          {description?.substring(0, 200)}
          {description && description.length > 200 ? '...' : ''}
        </p>
      </div>
    </div>
  );
};
