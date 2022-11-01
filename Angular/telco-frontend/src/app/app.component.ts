import { Component } from '@angular/core';

//Angularda her comp bir class ve her comp basinda @Component({}) ile belirtilmelidir.
//selector degiskeni, componenti diger componentler icinde cagirmamizi saglayan degiskendir.
//templateUrl componentin bagli olan html dosyasini tutar.
//styleUrls stil dosyalarini tutan degiskendir.
// template: 'html kodlari' diyerek componentin bagli oldugu html'i direkt component icine yazabiliriz.

//ng generate component componentDizini/componentAdi diyerek component olusturabiliriz.
//Bu komut component dosyalarini olusturup ardindan app.module.ts icinde imports kismina ekler
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'telco-frontend';

  sumOfNumbers = (number1: number, number2: number): number => {
    let result = number1 + number2;
    console.log(result);
    return result;
  };
  btnClick = () => {
    alert('Butona tiklandi');
  };
}
