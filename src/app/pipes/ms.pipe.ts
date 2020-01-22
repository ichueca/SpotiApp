import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ms'
})
export class MsPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const minutos = Math.floor(value / 60000);
    const secs = Math.trunc((value - minutos * 60000) / 1000);
    return `${minutos<10?'0'+minutos:minutos}:${secs<10?'0'+secs:secs}`;
  }

}
