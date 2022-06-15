import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CreateUserDTO, User } from '../models//user.model';
import { Auth } from 'src/app/models/auth.model';
import { BehaviorSubject } from 'rxjs';
import { switchMap, tap } from 'rxjs';
import { TokenService } from './token.service';
import { checkToquen } from '../interceptors/token.interceptor';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  private API_URL: string = `${environment.BASEAPI_URL}/users`;

  private userToken = new BehaviorSubject<string>('');
  userToken$ = this.userToken.asObservable();

  login(email: string, password: string) {
    return this.http
      .post<Auth>(`${this.API_URL}/auth`, { email, password })
      .pipe(tap((repsonse) => this.tokenService.saveToken(repsonse.token)));
  }

  profile() {
    // con next(this.token) hago disponible el token para que quede disponible para usar por cualquier componente (por ej agregar prod a carrito)
    // this.token = token;
    // this.userToken.next(this.token);
    return this.http.get<User>(`${this.API_URL}/userprofile`, {
      context: checkToquen(),
    });
    // return this.http.get<User>(`${this.API_URL}/userprofile`, {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // });
    // con este pedido traigo la info del user, que puedo hacer global tambien para usar en NAV
  }

  loginAndProfile(email: string, password: string) {
    return this.login(email, password).pipe(switchMap(() => this.profile()));
  }
}
