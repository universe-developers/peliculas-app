import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutoutText'
})
export class CutoutTextPipe implements PipeTransform {

  transform(value: string): any {
      let text = value.slice(0, 50);
    return text + '...';
  }

}
