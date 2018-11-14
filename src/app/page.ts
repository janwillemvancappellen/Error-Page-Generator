import { Type } from './type';
import { Color } from './color';
import { Language } from './language';

export class Page {
    name: string;
    type: Type;
    language: Language;
    color: Color;
    logo: {
        file: string,
        width: number,
        height: number
    };

    constructor(name: string, type: Type, language: Language, color: Color, logo: Object) {
        this.name = name;
        this.type = type;
        this.language = language;
        this.color = color;
        this.logo = {
            file: undefined,
            width: null,
            height: null,
        };
    }
}
