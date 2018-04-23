import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (!value || value.length === 0 || value.trim() === '') {
      return null;
    }

    const preps = ['of', 'the', 'and'];

    const words = value.toLowerCase().split(' ');
    const adjusted = words.map((word, idx) => {
      const letters = word.split('');
      if (letters.length === 0) {
        return '';
      }
      if (idx >= 1) {
        if (word.toLowerCase() === 'of') {
          return word;
        }
        if (word.toLowerCase() === 'the') {
          return word;
        }
        if (word.toLowerCase() === 'and') {
          return word;
        }
      }


      letters[0] = letters[0].toUpperCase();
      const adjustedWord = letters.join('');
      return adjustedWord;
    });
    return adjusted.join(' ');
  }

}
