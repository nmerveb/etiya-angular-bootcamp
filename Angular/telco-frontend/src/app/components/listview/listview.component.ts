import { Component, OnInit } from '@angular/core';

//productList comp olustur
//add formu olustur.(name)
//componenti app.component'te cagir
//sayfa yuklenir yuklenmez product isimleri listelenecek
//ekleme ile urun ekledigimizde liste otomatik yenilenecek
//li ler icinde /delete buttonu olsun delete deyince silinsin
@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css'],
})
export class ListviewComponent implements OnInit {
  categories: string[] = [];
  language: string = 'tr';
  constructor() {}

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categories = ['Giyim', 'Ayakkabi', 'Parfum', 'Ts'];
  }
}
