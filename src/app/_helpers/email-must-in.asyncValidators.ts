import { AbstractControl, FormGroup } from "@angular/forms";

// custom validator to check that one fields match array
export function EmailMustIn(matchingArray: string[]) {
  return (control: AbstractControl) => {
    return new Promise((resolve) => {
      // const control = control;
      const matchingControl = matchingArray;
      // if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      if (control.errors && !control.errors.emailMustIn) {
        // return if another validator has already found an error on the matchingControl
        return;
      }
      setTimeout(() => {
        // set error on matchingControl if validation fails
        if (!matchingControl.includes(control.value)) {
          // control.setErrors({ emailMustIn: true });
          return resolve({emailMustIn: true});
        } else {
          // control.setErrors(null);
          return resolve(null);
        }
      }, 1500);
    });
  };
}
