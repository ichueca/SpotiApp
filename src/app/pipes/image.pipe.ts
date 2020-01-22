import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (!value){
      return 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png';
    }
    return value.url;
  }

}
