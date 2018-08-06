export class Language {
    id: number;
    name: string;
    content: {
        'notFound': string;
        'error': string;
        text: {
            'title': string;
            'paragraph': string;
        };
        links: {
            'homepage': string;
            'search': string;
            'sitemap': string;
        }
    };
}
