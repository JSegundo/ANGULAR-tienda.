import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
  constructor(private authservice: AuthService) {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}
  password: string = '';
  useremail: string = '';

  login(e: Event) {
    e.preventDefault();
    return this.authservice
      .loginAndProfile(this.useremail, this.password)
      .subscribe((data) => {
        console.log(data);
        this.getProfile();
      });
  }

  getProfile() {
    return this.authservice.profile().subscribe((datauser) => {
      console.log(datauser);
    });
  }
}
