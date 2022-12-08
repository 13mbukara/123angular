import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'; //2

@Component({
  selector: 'app-forma',
  templateUrl: './forma.component.html',
  styleUrls: ['./forma.component.scss'],
})
export class FormaComponent implements OnInit {
  signupForm: FormGroup; //1
  genders = ['male', 'female']; //7
  constructor() {}

  ngOnInit(): void {
    //6
    this.signupForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      gender: new FormControl('male'),
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }
}
