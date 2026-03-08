export enum UserRole {
  ADMIN = "ADMIN",
  CUSTOMER = "CUSTOMER",
}

export interface IUser {
  id: number;
  username: string;
  email: string;
  role: UserRole;
}

export class User implements IUser {
  id: number;
  username: string;
  email: string;
  role: UserRole;

  constructor(id: number, username: string, email: string, role: UserRole) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.role = role;
  }
}
