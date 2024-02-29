const shiftChar = (char: string, shift: number): string => {
  return String.fromCharCode(char.charCodeAt(0) + shift);
};

const encrypt = (input: string): string => {
  return input
    .split('')
    .map((char) => shiftChar(char, 1))
    .join('');
};

const decrypt = (input: string): string => {
  return input
    .split('')
    .map((char) => shiftChar(char, -1))
    .join('');
};

export const loadFavorites = (): string[] => {
  const storedFavorites = localStorage.getItem('favorites');
  if (storedFavorites) {
    return JSON.parse(decrypt(storedFavorites));
  }

  return [];
};

export const saveFavorites = (favorites: string[]) => {
  const encryptedFavorites = encrypt(JSON.stringify(favorites));
  localStorage.setItem('favorites', encryptedFavorites);
};
