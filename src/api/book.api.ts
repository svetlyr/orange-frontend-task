import $api from './api';

import type { BookApiResponse, BookDto } from './types/book.dto';

export class BookAPi {
  private static instance: BookAPi;

  private constructor() {}

  public static getInstance(): BookAPi {
    if (!this.instance) {
      this.instance = new BookAPi();
    }
    return this.instance;
  }

  public getVolume = async (id: string) => {
    try {
      const response = await $api.get<BookDto>(`/v1/volumes/${id}`);

      return response.data;
    } catch (error) {
      console.error('Error fetching volumes:', error);
      throw error;
    }
  };

  public searchVolumes = async (query: string): Promise<BookDto[]> => {
    try {
      const response = await $api.get<BookApiResponse>(`/v1/volumes?q=${query}`);

      return response.data.items;
    } catch (error) {
      console.error('Error fetching volumes:', error);
      throw error;
    }
  };
}
