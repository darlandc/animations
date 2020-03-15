import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  public formloginStep1: FormGroup;
  public username: FormControl;
  formSubmitted: boolean = false;
  formattedMessage: string;

  constructor(private fb: FormBuilder) {
   }

  ngOnInit() {
    this.formloginStep1 = this.fb.group({
      username: [ '', [ Validators.minLength(5) ]]
    });
  }


  onKey(event) {
//    event.preventDefault();
    this.formattedMessage = event.target.value;

    if (this.formloginStep1.valid) {
      console.log(this.formloginStep1.value); // Process your form
    }
    console.log('is not valid');
  }

}

