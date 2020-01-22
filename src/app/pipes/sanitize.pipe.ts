import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'sanitize'
})
export class SanitizePipe implements PipeTransform {

  constructor(private sanitizer:DomSanitizer){}

  transform(value: any, url:string): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url+value);
  }

}
