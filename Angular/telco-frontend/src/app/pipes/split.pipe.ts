import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'split',
})
export class SplitPipe implements PipeTransform {
  //elemanlari istenilen sekle gore split edip array olarak geri doner.
  // "halit,anıl,burak,burak,büşranur,doğacan"
  // ["halit","anıl","burak","burak","büşranur"]
  transform(value: string, operator: string): string[] {
    return value.split(operator);
  }
}
