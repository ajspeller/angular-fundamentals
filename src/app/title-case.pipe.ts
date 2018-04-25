import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    if (!value) {
      return null;
    }

    const words = value.toLowerCase().split(' ');
    const adjustedSentence = words.map((word, idx) => {
      const letters = word.split('');
      if (idx >= 1 && this.isPrep(word)) {
        return word;
      }
      letters[0] = letters[0].toUpperCase();
      return letters.join('');
    });
    return adjustedSentence.join(' ');
  }

  private isPrep(word: string):boolean {
    const preps = ['of', 'the', 'and', 'as', 'at', 'for'];
    return preps.some(prep => prep === word);
  }

}
