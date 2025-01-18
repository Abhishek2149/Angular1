import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseString'
})
export class ReverseStringPipe implements PipeTransform {

  transform(value: string): string {
    // let newStr:string="";
    // for(let i=value.length - 1;i>=0;i--){
    //   newStr = newStr+value[i]
    // }
    // return newStr;

    return value.split('').reverse().join('');
  }

}
