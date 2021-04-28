import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form02',
  templateUrl: './form02.page.html',
  styleUrls: ['./form02.page.scss'],
})
export class Form02Page implements OnInit {
  public qtdcigarros;
  public valorcig;
  public qntdcigma;

  public user = {
    qtdcigarros: ' ',
    valorcig: '',
    qntdcqntdcigarrogmaacoigma: '',
  };

  constructor() { }

  ngOnInit() {
  }

  public savecig() {
    this.user.qtdcigarros = this.qtdcigarros;
  }
  public savevalcig() {
    this.user.valorcig = this.valorcig;
  }
  public saveqntdcig() {
    this.user.qntdcqntdcigarrogmaacoigma = this.qntdcigma;
  }
  public printLog() {
    console.log(this.user);
  }
}
