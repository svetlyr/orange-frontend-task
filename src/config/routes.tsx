import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import FavoritesPage from '../pages/Favorites';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<FavoritesPage />} />
    </Routes>
  );
};
