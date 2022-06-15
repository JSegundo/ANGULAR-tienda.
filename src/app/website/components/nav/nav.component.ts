import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { User } from 'src/app/models/user.model';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(
    private store: StoreService,
    private token: TokenService,
    private auth: AuthService
  ) {}

  counter: number = 0;
  usertoken: string | null = null;
  userData: User = { fullname: '', email: '', password: '' };

  ngOnInit(): void {
    this.store.myCart$.subscribe((products) => {
      this.counter = products.length;
    });
    this.usertoken = this.token.getToken();

    this.auth.profile().subscribe((userdata) => {
      console.log('auth service usado en nav', userdata);
      this.userData = userdata;
    });
  }

  showMenu = false;

  toggleShowMenu() {
    this.showMenu = !this.showMenu;
  }

  categoriesNav = [
    { name: "Men's clothing", route: "men's clothing" },
    { name: "Women's clothing", route: "women's clothing" },
    { name: 'Electronics', route: 'electronics' },
    { name: 'Jewelery', route: 'jewelery' },
  ];
}
