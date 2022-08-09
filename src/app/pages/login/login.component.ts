import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  private router: Router;

  constructor(formBuilder: FormBuilder, router: Router) {
    this.form = formBuilder.group({
      name: [''],
      password: ['']
    });
    this.router = router;
  }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    let user: User = this.form.value;
    UserService.userLogin = user;
    this.router.navigate(["/home"]);
  }
}
