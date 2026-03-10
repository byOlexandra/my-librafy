export const GOOGLE_BOOKS_BASE_URL = "https://www.googleapis.com/books/v1";

export interface BookVolume {
    id: string;
    volumeInfo: {
        title: string;
        authors?: string[];
        description?: string;
        imageLinks?: {
            thumbnail: string;
        };
        pageCount?: number,
        categories?: string[];
        averageRating?: number;
        ratingsCount?: number,
    };
}

export interface GoogleBooksResponse {
    items: BookVolume[],
    totalItems: number,
}