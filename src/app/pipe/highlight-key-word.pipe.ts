import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightKeyWord'
})
export class HighlightKeyWordPipe implements PipeTransform {

  transform(value: string, keyWord?: string): any {
    if (keyWord) {
    return value.replace(new RegExp(keyWord, 'i') , '<b>' +  keyWord + '</b>');
    }

    return value;
  }

}
