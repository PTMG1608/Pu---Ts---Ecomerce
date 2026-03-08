//esse arquivo é para criar a classe de usuário, que vai ser usada para criar os usuários do sistema
//inclue quatro variaveis, id, username, email e role, que são do tipo number, string, string e UserRole respectivamente, e um construtor para inicializar essas variáveis
export enum UserRole {
  ADMIN = "ADMIN",
  CUSTOMER = "CUSTOMER",
}

// interface para definir o tipo de usuário, com as mesmas variaveis da classe User, para garantir que a classe User implemente a interface IUser
export interface IUser {
  id: number;
  username: string;
  email: string;
  role: UserRole;
}

// a classe de usuário implementa a interface IUser, garantindo que ela tenha as mesmas variaveis da interface, e um construtor para inicializar essas variaveis
export class User implements IUser {
  id: number;
  username: string;
  email: string;
  role: UserRole;

  // o construtor da classe User recebe os parametros para inicializar as variaveis da classe, e atribui os valores recebidos as variaveis da classe
  constructor(id: number, username: string, email: string, role: UserRole) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.role = role;
  }
}
