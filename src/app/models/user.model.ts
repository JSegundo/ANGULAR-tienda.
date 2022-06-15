export interface User {
  id?: string;
  fullname: string;
  email: string;
  password: string;
}

export interface CreateUserDTO extends Omit<User, 'id'> {}
