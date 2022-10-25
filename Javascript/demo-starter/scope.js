console.log("Scope Baslangic");

//Global Scope
var variable = 1;
//let variable = 2;

function func() {
  //let variable = 1;
  //Function Scope
}

//console.log(variable);

var value1 = 10;
let value2 = 20;
const value3 = 30;

function func2() {
  //var value1 = 40;
  var value = 40; //onemli bi veri
  let value2 = 50;
  const value3 = 60;
  if (true) {
    //Block Scope
    var value4 = 70;
    let value5 = 80;
    var value = 70; //onemli veriye yeniden yazma islemi yapildi
    console.log(value4, value5);
  }

  console.log(value, value1, value2, value3, value4, value5);
}

func2();
console.log(value1, value2, value3, value4, value5);
