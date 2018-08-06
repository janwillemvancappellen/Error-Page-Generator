import { Language } from './language';

export const LANGUAGES: Language[] = [
    {
        id: 1,
        name: 'nl',
        content: {
            notFound: 'Niet gevonden',
            error: 'Foutcode',
            text: {
                title: 'De pagina die u heeft opgevraagd is niet gevonden.',
                paragraph: 'U kunt de informatie die u zoekt mogelijk vinden via de homepage, de zoekpagina of de sitemap.',
            },
            links: {
                homepage: 'Homepage Rijksoverheid.nl',
                search: 'Zoeken',
                sitemap: 'Sitemap',
            },
        }
    },
    {
        id: 2,
        name: 'en',
        content: {
            notFound: 'Not found',
            error: 'Error code',
            text: {
                title: 'Sorry, the page or file you requested cannot be found.',
                paragraph: 'You may be able to find the information you are looking for via the search page, the home page or the sitemap.',
            },
            links: {
                homepage: 'Homepage Government.nl',
                search: 'Search',
                sitemap: 'Sitemap'
            }
        }
    }
];

