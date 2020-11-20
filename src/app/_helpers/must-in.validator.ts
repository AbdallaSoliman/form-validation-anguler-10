import { FormGroup } from "@angular/forms";

// custom validator to check that one fields match array
export function MustIn(controlName: string, matchingArray: string[]) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = matchingArray;
    // if (matchingControl.errors && !matchingControl.errors.mustMatch) {
    if (control.errors && !control.errors.mustIn) {
      // return if another validator has already found an error on the matchingControl
      return;
    }

    // set error on matchingControl if validation fails
    if (!matchingControl.includes(control.value)) {
      control.setErrors({ mustIn: true });
    } else {
      control.setErrors(null);
    }
  };
}
