//OOP --> Object Oriented Programming

export default class Ev {
  constructor(oda, kat, cephe, aidat, fiyat) {
    this.odaSayisi = oda;
    this.kat = kat;
    this.cephe = cephe;
    this.aidat = aidat;
    this.fiyat = fiyat;
  }
  //metotlar
  tanit() {
    console.log(this);
  }
}

export const ev1 = new Ev(3, 2, "Kuzey", 100, 500);
ev1.tanit();

function evOlustur(oda, kat, cephe, aidat, fiyat) {
  this.odaSayisi = oda;
  this.kat = kat;
  this.cephe = cephe;
  this.aidat = aidat;
  this.fiyat = fiyat;
}
evOlustur.prototype.tanit = function () {
  console.log(this);
};

const ev2 = new evOlustur(3, 2, "Kuzey", 100, 5000);
ev2.tanit();
