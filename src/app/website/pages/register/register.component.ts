import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Auth } from 'src/app/models/auth.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private userService: UsersService) {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}

  fullname: string = '';
  email: string = '';
  password: string = '';

  register(e: Event) {
    e.preventDefault();
    return this.userService
      .create({
        fullname: this.fullname,
        email: this.email,
        password: this.password,
      })
      .subscribe((data) => {
        console.log('user created ', data);
      });
  }
}
