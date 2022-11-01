//Typescript type safe'dir.
//package.json dosyasinda birden fazla scripti birbirine baglamak icin && kullaniriz.
// let degiskenAdi: degiskenTuru = deger;
//let name: string = "halit";
//tsc dosyaAdi.ts komutunu konsolda kosarak dosyanin .js'e cevrilmesini saglariz.
console.log("Ts baslangic.");
function sayHello(name) {
    console.log("Hello ".concat(name));
}
sayHello("Merve");
//sayHello(3);
var sumFunction = function (a1, a2) {
    return a1 + a2;
};
var sumOfNumbers = sumFunction(5, 6);
console.log(sumOfNumbers);
var Greeter = /** @class */ (function () {
    function Greeter(name) {
        this.name = name;
    }
    Greeter.prototype.sayHi = function () {
        console.log("Hello ".concat(this.name));
        this.sayWhatsUp();
    };
    Greeter.prototype.sayWhatsUp = function () {
        console.log("What's up?");
    };
    return Greeter;
}());
var greeter = new Greeter("Merve");
greeter.sayHi();
var UserService = /** @class */ (function () {
    function UserService() {
        this.userNames = [];
    }
    UserService.prototype.getUserNames = function () {
        return this.userNames;
    };
    UserService.prototype.addUser = function (name) {
        this.userNames.push(name);
    };
    return UserService;
}());
var userServ = new UserService();
// userServ.addUser("Test1");
// userServ.addUser("Test2");
userServ.addUser({ name: "Engin", surname: "Demirog", age: 3 });
console.log(userServ.getUserNames());
