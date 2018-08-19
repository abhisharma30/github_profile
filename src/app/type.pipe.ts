import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {
  transform(items: any[], type: string): any[] {
    if (!items) {
        return [];
    }
    if (!type) {
        return items;
    }
    return items.filter(item => {
      if (type === 'Forks') {
        return item.fork === true;
      } else {
        return item.archived === true;
      }
    });
  }
}
