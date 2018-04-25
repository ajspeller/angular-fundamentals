import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (!value) {
      return null;
    }

    const preps = ['of', 'the', 'and', 'as', 'at', 'for'];

    const words = value.toLowerCase().split(' ');
    const adjustedSentence = words.map((word, idx) => {
      const letters = word.split('');
      if (idx >= 1 && preps.some(prep => prep === word)) {
        return word;
      }

      letters[0] = letters[0].toUpperCase();
      const adjustedWord = letters.join('');
      return adjustedWord;
    });
    return adjustedSentence.join(' ');
  }

}
