import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-depoimentos',
  templateUrl: './depoimentos.page.html',
  styleUrls: ['./depoimentos.page.scss'],
})
export class DepoimentosPage implements OnInit {

  slides = [
    {
      titulo: "Leonardo Ferreira Gulpz",
      data: "11/06/2021",
      depoimento: "The Ionic Component Documentation showcases a number of useful components that are included out of the box with Ionic.",
      imgAvt: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      titulo: "Danzinws",
      data: "02/06/2019",
      depoimento: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      imgAvt: "assets/img/ica-slidebox-img-3.png",
    }
  ];
  constructor() { }

  public homepage = "http://localhost:8100/home"
  ngOnInit() {
  }
}
