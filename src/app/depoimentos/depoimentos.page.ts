import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-depoimentos',
  templateUrl: './depoimentos.page.html',
  styleUrls: ['./depoimentos.page.scss'],
})
export class DepoimentosPage implements OnInit {

  slides = [
    {
      data: "11/06/2021",
      titulo: "Cláudia, 32 anos",
      depoimento: "Me chamo Cláudia e fumo desde os meus 17 anos, conheci o App StopSmoking e já estou 3 meses sem fumar, o app realmente tem me ajudado!",
      
    },
    {
      data: "11/06/2021",
      titulo: "Thiago Felipe, 22",
      depoimento: "Estou 15 dias sem fumar, o app tem me ajudado muito, já cheguei a fumar 2 maços de cigarro por dia, valeu muito apena  ter baixado o app. <br> Antônio Mendonça, 45 anos",
    },
    {
      titulo: "Leonardo Ferreira Gulpz",
      data: "11/06/2021",
      depoimento: "The Ionic Component Documentation showcases a number of useful components that are included out of the box with Ionic.",
    },  
  ]   
  
  constructor() { }

  public homepage = "http://localhost:8100/home"
  ngOnInit() {
  }
}
