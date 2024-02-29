import React, { type ChangeEventHandler, type HTMLAttributes } from 'react';

type SearchBoxProps = {
  query: string;
  onSearch: ChangeEventHandler<HTMLInputElement>;
} & HTMLAttributes<HTMLElement>;

export const SearchBox: React.FC<SearchBoxProps> = ({ query, onSearch }) => {
  return (
    <input
      type="text"
      value={query}
      onChange={onSearch}
      placeholder="Search for books..."
      className={`my-3 mb-8 w-2/4 justify-center rounded border bg-green-300 px-4 py-3 font-bold text-gray-800 shadow-md`}
    />
  );
};
