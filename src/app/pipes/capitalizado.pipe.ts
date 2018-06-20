import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})

export class CapitalizadoPipe implements PipeTransform {
  
  transform(value:string, todas:boolean = true):string {
    let result  = '';
    let nombres = value.toLowerCase().split(" ");
    
    if(todas){
      for(let nombre of nombres){
        nombre = nombre[0].toUpperCase() + nombre.substr(1);
        result = result + nombre + ' '
      }
    }else{
      result = value[0].toUpperCase() + value.toLowerCase().substr(1)
    }

    return result;
  }
  
}