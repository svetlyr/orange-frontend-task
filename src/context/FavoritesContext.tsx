import React, { createContext, useState, useEffect, type PropsWithChildren } from 'react';

import { loadFavorites, saveFavorites } from '@utils';

type FavoritesContextType = {
  favorites: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
};

const initalFavoritesContext: FavoritesContextType = {
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
};

export const FavoritesContext = createContext<FavoritesContextType>(initalFavoritesContext);

export const FavoritesProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const loadedFavorites = loadFavorites();
    if (loadedFavorites) {
      setFavorites(loadedFavorites);
    }
  }, []);

  const addFavorite = (id: string) => {
    if (!favorites.includes(id)) {
      const updatedFavorites = [...favorites, id];
      saveFavorites(updatedFavorites);
      setFavorites(updatedFavorites);
    }
  };

  const removeFavorite = (id: string) => {
    const updatedFavorites = favorites.filter((favoriteId) => favoriteId !== id);
    saveFavorites(updatedFavorites);
    setFavorites(updatedFavorites);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
