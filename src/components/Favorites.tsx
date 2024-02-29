import React, { type HTMLAttributes } from 'react';

type Props = {
  className?: string;
} & HTMLAttributes<SVGSVGElement>;

export const Favorites: React.FC<Props> = ({ className, onClick }) => {
  return (
    <div className="flex items-center space-x-2">
      <svg
        onClick={onClick}
        data-slot="icon"
        data-darkreader-inline-stroke=""
        fill="none"
        strokeWidth="1.5"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className={className}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
        ></path>
      </svg>
      <span className="font-semibold text-gray-800">Favorites</span>
    </div>
  );
};
