import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'acerdaDe',
  standalone: true
})
export class AcerdaDePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
