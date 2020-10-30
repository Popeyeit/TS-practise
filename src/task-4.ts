// interface IObj {
//   login: string;
//   email: string;
// }
// interface IAccount {
//   login: string;
//   email: string;
//   getInfo(): void;
// }

// class Account implements IAccount {
//   public login: string;
//   public email: string;
//   constructor(params: IObj) {
//     this.login = params.login;
//     this.email = params.email;
//   }
//   public getInfo() {
//     console.log(`Login: ${this.login}, Email: ${this.email}`);
//   }
// }

// console.log(Account.prototype.getInfo); // function

// const mango: IAccount = new Account({
//   login: 'Mangozedog',
//   email: 'mango@dog.woof',
// });

// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly: IAccount = new Account({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// poly.getInfo(); // Login: Poly, Email: poly@mail.com

// interface IUser {
//   name: string;
//   age: number;
//   followers: number;
//   getInfo(): void;
// }
// interface IUserParams {
//   name: string;
//   age: number;
//   followers: number;
// }
// class User implements IUser {
//   public name: string;
//   public age: number;
//   public followers: number;
//   constructor(params: IUserParams) {
//     this.name = params.name;
//     this.age = params.age;
//     this.followers = params.followers;
//   }
//   public getInfo() {
//     console.log(
//       `User ${this.name} is ${this.age} years old and has ${this.followers} followers`,
//     );
//   }
// }

// const mango: IUser = new User({
//   name: 'Mango',
//   age: 2,
//   followers: 20,
// });

// mango.getInfo(); // User Mango is 2 years old and has 20 followers

// const poly: IUser = new User({
//   name: 'Poly',
//   age: 3,
//   followers: 17,
// });

// poly.getInfo(); // User Poly is 3 years old and has 17 followers

// interface IStorage {
//   items: string[];
//   getItems(): string[];
//   addItem(item: string): void;
//   removeItem(item: string): void;
// }
// class Storage implements IStorage {
//   public items: string[];
//   constructor(items: string[]) {
//     this.items = items;
//   }
//   public getItems() {
//     return this.items;
//   }
//   public addItem(item: string) {
//     this.items.push(item);
//   }
//   public removeItem(item: string) {
//     const isValue = this.items.includes(item);
//     if (isValue) {
//       this.items = this.items.filter(el => el !== item);
//     }
//   }
// }

// const storage: IStorage = new Storage([
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор',
// ]);

// const items = storage.getItems();
// console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

// storage.addItem('Дроид');
// console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

// storage.removeItem('Пролонгер');
// console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

interface IStringBuilder {
  value: string;
  append(v: string): void;
  prepend(v: string): void;
  pad(v: string): void;
}
class StringBuilder implements IStringBuilder {
  _value: string;
  constructor(string: string) {
    this._value = string;
  }
  get value() {
    return this._value;
  }
  append(v: string) {
    this._value = `${this._value}${v}`;
  }
  prepend(v: string) {
    this._value = `${v}${this._value}`;
  }
  pad(v: string) {
    this._value = `${v}${this._value}${v}`;
  }
}

const builder: IStringBuilder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='

export {};
