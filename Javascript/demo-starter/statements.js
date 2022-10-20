console.log("Statements starts");

//Kosul Bloklari
//true-false
//mantiksal operatorlaer boolean dondurur.
console.log(1 == 1);
console.log(1 != 1);
console.log(1 >= 1); // < >= ...

//== sadece deger kontrolu yapar
//=== hem deger hem tip kontrolu yapar
console.log(1 === "1");
console.log(1 !== "1");

//condition true ise blog calisir degilse calismaz.
if (1 != 1) {
  console.log("if blogu calisti");
} else if (2 == 2) {
  //istedigimiz kadar else if kullanabiliriz.
  console.log("else if calisti");
} else {
  // hic bir if bloguna girilmezse bu satir calisir.
  console.log("else blogu calisti");
}

let dolarKurDun = 18.74;
let dolarKurBugun = 18.8;
//ternary
//kosul? true kod blogu: false kod blogu;
dolarKurBugun >= dolarKurDun
  ? console.log("Dolar bugun dune gore daha fazla")
  : console.log("Dolar bugun dune gore daha az");

if (dolarKurBugun > dolarKurDun) {
  console.log("fazla");
} else if (dolarKurBugun < dolarKurDun) {
  console.log("az");
}

//switch-case
let toplamBakiye = 100;
let secilenKur = "USD";

switch (secilenKur) {
  case "USD":
    //USD
    toplamBakiye *= 17;
    break;
  case "EUR":
    toplamBakiye *= 20;
    break;
  case "TL":
    toplamBakiye;
    break;
  default:
    console.warn("Bilinmedik kur turu..");
    break;
}

console.log("Toplam Bakiye: ", toplamBakiye);

//
let secilenKredi = "tasit";
let krediTutari = 100;

switch (secilenKredi) {
  case "tasit":
    //USD
    krediTutari *= 2;
    break;
  case "ihtiyac":
    krediTutari *= 1.5;
    break;
  case "konut":
    krediTutari *= 2.5;
    break;
  default:
    console.warn("Bilinmedik kredi..");
    break;
}

console.log("Kredi Tutari: ", krediTutari);

let tempNumber = 0;
tempNumber % 2 == 0 ? console.log("cift") : console.log("tek");
