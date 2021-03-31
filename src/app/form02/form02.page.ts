import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form02',
  templateUrl: './form02.page.html',
  styleUrls: ['./form02.page.scss'],
})
export class Form02Page implements OnInit {
  public qntdcig;
  public valcig;
  public qntdcigma;

  public user = {
    nome: ' ',
  };

  constructor() { }

  ngOnInit() {
  }

  public savecig() {
    this.user.nome = this.qntdcig;
  }
  public savevalcig() {
    this.user.nome = this.valcig;
  }
  public saveqntdcig() {
    this.user.nome = this.qntdcigma;
  }


  logForm() {
    this.user
  }

}
