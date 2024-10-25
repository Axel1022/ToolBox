import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'universidadesPais',
  standalone: true
})
export class UniversidadesPaisPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
