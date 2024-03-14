import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'grade'
})
export class GradePipe implements PipeTransform {

  transform(points: number,): string {
    if(points > 50){
      return 'A'
    }
    else{
      return 'B';
    }
  }

}
