console.log("Merhaba Kodlamaio");

//Yorum satiri kod calistirilirken dikkate alinmaz.

//DEGISKENLER VE TURLERI-------------------------

//Eski degisken tanimlama turu-es5-
//variable var
//Js tip guvenli degildir. Veri tipinin anonim olup degisebildigi anlamina gelir.
//Ts tip guvenlidir.
var dolarKur = 10;

//var ile tanimlanan degiskenler yeniden set edilebilir.
dolarKur = 20;
console.log(dolarKur);

//string
var euroKur = "15";
console.log(euroKur);

//matematiksel operator
console.log(dolarKur + 5);
console.log(euroKur + 10); //!string oldugu icin toplama olmaz.

//let keywordu yeni nesil degisken tanimlama icin kullanilir.

//boolean - kosullarda tercih ederiz.
let euroYukselis = true; //false da olabilir.
console.log(euroYukselis);

//number odakli sayi olabilir.
dolarKur = 12.52;
console.log(dolarKur);

//koleksiyonlar
//array
let krediler = ["ihtiyac", "tasit", "konut"];
console.log(krediler);
console.log(krediler[1]);

//object
//json -> js object notation
//key:value
let odemeBilgileri = {
  aylikOdeme: 415.53,
  faizOrani: 1.89,
  toplamGeriOdeme: 14950.42,
  krediTipi: "Ihtiyac Kredisi",
};
console.log(odemeBilgileri);
//Naming Convention
//camelCase tercih edilir.
