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
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit(userForm: NgForm) {
    console.log(this._userForm);
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

  updateName() {
    this._userForm.form.patchValue({
      userData: { username: 'erikcartman' },
    });
  }
}
