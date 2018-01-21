import { Directive } from '@angular/core';
import { FormControl, ValidatorFn } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

const urlRegexp = new RegExp('(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})');

@Directive({
  selector: '[appFieldValidator]'
})
export class FieldValidatorDirective {

  constructor() { }
  // create a static method for your validation
  static validateCharacters(control: FormControl) {

    // first check if the control has a value
    if (control.value && control.value.length > 0) {

      // match the control value against the regular expression
      const matches = control.value.match(urlRegexp);
      console.log(matches);
      // if there are matches return an object, else return null.
      return matches && matches.length ? null : { invalid_characters: matches };
    } else {
      return null;
    }
  }

}
// export function forbiddenUrlValidator(control: AbstractControl): ValidatorFn {
//   const urlRegexp = new RegExp('(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})');
//   return forbiddenNameValidator(urlRegexp);
// }
// export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
//   return (control: AbstractControl): { [key: string]: any } => {
//     const forbidden = nameRe.test(control.value);
//     console.log(forbidden);
//     return forbidden ? { 'forbiddenName': { value: control.value } } : null;
//   };
// }
