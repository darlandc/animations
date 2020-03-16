import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  public formloginStep1: FormGroup;
  public formloginStep2: FormGroup;
  public username: FormControl;

  formSubmitted = false;
  formattedMessage: string;
  user: User;
  localUsername: string;
  firstStep = false;
  secondStep = false;

  // tslint:disable-next-line:max-line-length
  JWT_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NjkxMjc0NjksImlhdCI6MTU2OTA0MTA2OSwibmJmIjoxNTY5MDQxMDY5LCJpZGVudGl0eSI6MTAyMH0.ITbxztPDkv7zQig0xYIWx4ykZv9id10OdyecrR6EVio';

  constructor(private fb: FormBuilder) {}

  ngOnInit() {

    this.firstStep = true;

    this.localUsername = localStorage.getItem('username');
    this.user = { username: this.localUsername, level: null };

    this.formloginStep1 = this.fb.group({
      username: [ '', [ Validators.minLength(5) ]]
    });

    this.formloginStep2 = this.fb.group({
      password: [ '', [ Validators.minLength(5) ]]
    });

    console.log(this.user);
    console.log(localStorage);
  }


  onKey(event) {
    event.preventDefault();
    this.formattedMessage = event.target.value;

    if (this.formloginStep1.valid) {
      console.log(this.formloginStep1.value); // Process your form
      localStorage.setItem('username', this.formattedMessage);
      console.log('is valid');
      // this.firstStep = false;
    } else {
      console.log('is not valid');
      this.secondStep = true;
    }
  }

  onSubmit(){

    if (this.formloginStep2.valid) {

    }

  }

}

