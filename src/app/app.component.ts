import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenNames = ['chris', 'erik'];
  onSubmit() {
    console.log('onsubmit is called');
  }

  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }
  addHobbies() {
    const control = new FormControl(null, [Validators.required]);
    this.getControls().push(control);
  }
  ngOnInit() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          [this.forbiddenEMails.bind(this)]
        ),
        username: new FormControl('rawendra', [
          Validators.required,
          this.userNameInValid.bind(this),
        ]),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([]),
    });

    this.signupForm.valueChanges.subscribe(value=>console.log(value))
  }

  userNameInValid(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenNames.includes(control.value)) {
      return { nameIsForbidden: true };
    }
    return null;
  }

  autofillForm() {
    this.signupForm.setValue({
      userData: {
        email: 'rawendra@gmail.com',
        username: 'rawendra',
      },
      gender: 'male',
      hobbies: ['asd','tyu'],
    });
  }

  reset(){
    this.signupForm.reset()
  }

  forbiddenEMails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((res, rej) => {
      setTimeout(() => {
        const result =
          control.value === 'test@test.com' ? { emailIsForbidden: true } : null;
        res(result);
      }, 1000);
    });
    return promise;
  }
}
