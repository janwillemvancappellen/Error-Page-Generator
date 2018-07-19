import { Type } from './type';
import { Color } from './color';
import { Language } from './language';

export class Page {
    name: string;
    type: Type;
    language: Language;
    color: Color;

    constructor(name: string, type: Type, language: Language, color: Color) {
        this.name = name;
        this.type = type;
        this.language = language;
        this.color = color;
    }

}
