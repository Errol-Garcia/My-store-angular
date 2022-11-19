import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeVocalToNumber'
})
export class ChangeVocalToNumberPipe implements PipeTransform {

  cadena: string[] = [];
  i =0;

  transform(value: string,): string {

    this.cadena = value.split('');

    for(this.i = 0; this.i<this.cadena.length; this.i++){
          switch(this.cadena[this.i]){
            case 'a':
              this.cadena[this.i]='5';
            break;
            case 'e':
              this.cadena[this.i]='3';
            break;
            case 'i':
              this.cadena[this.i]='1';
            break;
            case 'o':
              this.cadena[this.i]='0';
            break;
            case 'u':
              this.cadena[this.i]='9';
            break;
          }
    }


    return this.cadena.join('');
  }

}
