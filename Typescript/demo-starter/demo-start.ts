import { User } from "./user";
//Typescript type safe'dir.

//package.json dosyasinda birden fazla scripti birbirine baglamak icin && kullaniriz.

// let degiskenAdi: degiskenTuru = deger;
//let name: string = "halit";

//tsc dosyaAdi.ts komutunu konsolda kosarak dosyanin .js'e cevrilmesini saglariz.
console.log("Ts baslangic.");

function sayHello(name: string): void {
  console.log(`Hello ${name}`);
}

sayHello("Merve");
//sayHello(3);

let sumFunction = (a1: number, a2: number): number => {
  return a1 + a2;
};

let sumOfNumbers = sumFunction(5, 6);
console.log(sumOfNumbers);

class Greeter {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  sayHi() {
    console.log(`Hello ${this.name}`);
    this.sayWhatsUp();
  }

  private sayWhatsUp() {
    console.log("What's up?");
  }
}

let greeter = new Greeter("Merve");
greeter.sayHi();

//userService class olustur.
//string[] donen getUserNames func olustur.
//string name alan add metodu olsun
//class icinde array tut ama private olsun.

// class User {
//   name: string;
//   surname: string;
//   age: number;

//   constructor(name: string, surname: string, age: number) {
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//   }
// }

//interface'ler soyuttur, new object elde edilemezler bu yuzden constructor'lari bulunmaz.
// interface User {
//   name: string;
//   surname: string;
//   age: number;
// }

class UserService {
  private userNames: User[] = [];

  getUserNames(): User[] {
    return this.userNames;
  }

  addUser(name: User): void {
    this.userNames.push(name);
  }
}

const userServ = new UserService();
// userServ.addUser("Test1");
// userServ.addUser("Test2");
userServ.addUser({ name: "Engin", surname: "Demirog", age: 3 });
console.log(userServ.getUserNames());
