import { Component, OnInit } from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
// import { AppAsyncValidators } from "./_helpers/app-async.validator";
import { EmailMustIn } from "./_helpers/email-must-in.asyncValidators";
import { MustIn } from "./_helpers/must-in.validator";

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from "./_helpers/must-match.validator";

@Component({ selector: "app-root", templateUrl: "app.component.html" })
export class AppComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  forbidenUsernames = ["chris", "Anna"];
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        title: ["", Validators.required],
        firstName: ["", Validators.required],
        lastName: ["", Validators.required],
        // validates date format yyyy-mm-dd
        dob: [
          "",
          [
            Validators.required,
            Validators.pattern(
              /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/
            ),
          ],
        ],
        email: ["", {updateOn: 'blur',validators:[Validators.required, Validators.email], asyncValidators: EmailMustIn(["abdalla@yahoo.com", "abdalla@gmail.com"])}],
        password: ["", [Validators.required, Validators.minLength(6)]],
        confirmPassword: ["", Validators.required],
        hobbies: new FormArray([]),
        acceptTerms: [false, Validators.requiredTrue],
      },
      {
        validator: [
          MustMatch("password", "confirmPassword"),
          MustIn("firstName", ["chris", "Anna"]),
        ]
      }
    );
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  // hobbies
  get controls() {
    return (this.registerForm.controls["hobbies"] as FormArray).controls;
  }
  // createItem(): FormControl {
  // return this.formBuilder.group({
  //   name: ['', Validators.required]
  // });
  // }

  onAddHobby(): void {
    const form = new FormControl(null, Validators.required);
    (this.registerForm.controls["hobbies"] as FormArray).push(form);
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.pending || this.registerForm.invalid) {
      return;
    }

    // display form values on success
    alert(
      "SUCCESS!! :-)\n\n" + JSON.stringify(this.registerForm.value, null, 4)
    );
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
