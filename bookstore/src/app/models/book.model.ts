export interface Book {
    volumeInfo: {
        title: string;
        imageLinks?: {
            thumbnail?: string;
        };
        publisher: string;
        publishedDate: string;
        description: string;
    };
}
