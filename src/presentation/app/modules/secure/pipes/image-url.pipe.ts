import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'imageUrl'
})
export class ImageUrlPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return `api/upload/usuarios/no-image`;
    } else if (value.includes('https')) {
      return value;
    } else if (value) {
      return `api/upload/usuarios/${value}`;
    } else {
      return `api/upload/usuarios/no-image`;
    }
  }
}
