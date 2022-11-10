import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-overlay-title',
  templateUrl: './overlay-title.component.html',
  styleUrls: ['./overlay-title.component.css'],
})
export class OverlayTitleComponent implements OnInit {
  @Input() text!: string;

  constructor() {
    //undefined degeri browser tarafindan atilirken null degerini yazilimci atar genelde.
    //undefined o degiskenin tanimlanmamis oldugunu gosterir.
    //null ise ayri bir tip degeridir.
    //this.text=null;
  }

  ngOnInit(): void {}
}
