import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-depoimentos',
  templateUrl: './depoimentos.page.html',
  styleUrls: ['./depoimentos.page.scss'],
})
export class DepoimentosPage implements OnInit {
  public depoimentos;
  
  public user = {
    nome: ' ',

  };
  constructor() { }

  ngOnInit() {
  }

}
