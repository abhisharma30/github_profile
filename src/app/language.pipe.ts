import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'language'
})
export class LanguagePipe implements PipeTransform {
  transform(items: any[], language: string): any[] {
    if (!items) {
        return [];
    }
    if (!language) {
        return items;
    }
    return items.filter(item => {
      return item.language === language;
    });
  }
}
