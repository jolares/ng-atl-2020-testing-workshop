import { Pipe, PipeTransform } from "@angular/core";

// Todo
// Class test
// DOM test
@Pipe({
  name: "bcDate"
})
export class BcDatePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return `${value}m BC`;
  }
}
