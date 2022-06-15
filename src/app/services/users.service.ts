import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CreateUserDTO, User } from '../models//user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  private API_URL: string = `${environment.BASEAPI_URL}/users`;

  create(dto: CreateUserDTO) {
    return this.http.post<User>(this.API_URL, dto);
  }
}
