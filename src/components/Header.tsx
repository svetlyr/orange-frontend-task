import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Logo } from './Logo';
import { Favorites } from './Favorites';

export const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-green-200 text-lg text-gray-800">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo onClick={() => navigate('/')} className={'cursor-pointer'} />
          <h1 className="text-2xl font-semibold text-gray-600">Book Store</h1>
        </div>
        <div>
          <Favorites onClick={() => navigate('/favorites')} className={'h-8 w-8 cursor-pointer'} />
        </div>
      </div>
    </header>
  );
};
