import React, { type HTMLAttributes } from 'react';

import bookstoreLogo from '@assets/bookstore-logo.png';

type Props = {
  className?: string;
} & HTMLAttributes<HTMLElement>;

export const Logo: React.FC<Props> = ({ className, onClick }) => {
  return (
    <img
      onClick={onClick}
      src={bookstoreLogo}
      alt="Bookstore Logo"
      className={`h-20  w-auto ${className}`}
    />
  );
};
