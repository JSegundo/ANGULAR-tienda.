import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(private auth: AuthService) {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  userData: User = { fullname: '', email: '', password: '' };

  ngOnInit(): void {
    this.auth.profile().subscribe((user) => {
      this.userData = user;
    });
  }
}
