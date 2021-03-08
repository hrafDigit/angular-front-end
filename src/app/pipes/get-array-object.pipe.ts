import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getArrayObject'
})
export class GetArrayObjectPipe implements PipeTransform {

  transform(value: any, ...args: string[]): any {

    let keys = [];
    for (let key in value) {
      keys.push( {keys: key, values:value[key]} );
    }
    // return null;
  }

}
