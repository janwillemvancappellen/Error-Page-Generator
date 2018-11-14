import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({name: 'SafeUrl'})
export class SafeUrlPipe implements PipeTransform {

    constructor(private sanitizer: DomSanitizer) {}

    transform(url) {
        return this.sanitizer.bypassSecurityTrustUrl(url);
    }
}
