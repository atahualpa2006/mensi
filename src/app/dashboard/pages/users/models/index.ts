export interface User {
  id: number;
  name: string;
  surname: string;
  email: string;
  password: string;
  token: string;
}

export interface CreateUserData {
  name: string;
  surname: string;
  email: string;
  password: string;
}

export interface UpDateUserData {
  name?: string;
  surname?: string;
  email?: string;
  password?: string;
}
