import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('userForm') _userForm: NgForm;
  answer: string = '';
  genders = ['male', 'female'];

  requestPayload = {
    gender: '',
    username: '',
    email: '',
    questionAnswer: '',
    secret: '',
  };

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit(userForm: NgForm) {
    console.log(this._userForm);
    const {
      userData: { email, username },
      questionAnswer,
      secret,
      gender,
    } = userForm.value;
    this.requestPayload = { email, username, questionAnswer, secret, gender };
    console.log('this.requestPayload -->', this.requestPayload);
  }

  autoFill() {
    this._userForm.setValue({
      userData: {
        email: 'asd@asd.com',
        username: 'rawendra',
      },
      questionAnswer: 'asdfg',
      secret: 'pet',
      gender: 'male',
    });
  }

  handleReset(userForm: NgForm){
    userForm.reset()
  }
  updateName() {
    this._userForm.form.patchValue({
      userData: { username: 'erikcartman' },
    });
  }
}
