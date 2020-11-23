import { AbstractControl, FormGroup } from "@angular/forms";

// custom validator to check that one fields match array
export function EmailMustIn(matchingArray: string[]) {
  return (control: AbstractControl) => {
    return new Promise((resolve) => {

      if (control.errors && !control.errors.emailMustIn) {
        // return if another validator has already found an error on the matchingControl
        return;
      }
      setTimeout(() => {
        // set error on matchingControl if validation fails
        if (matchingArray.includes(control.value)) {

          return resolve({emailMustIn: true});
        } else {

          return resolve(null);
        }
      }, 1500);
    });
  };
}
