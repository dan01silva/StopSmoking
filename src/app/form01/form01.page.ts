import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-form01',
  templateUrl: './form01.page.html',
  styleUrls: ['./form01.page.scss'],
})
export class Form01Page implements OnInit {
  public dataNasc;
  public genuser;
  public cityuser;

  public today = new Date();
  public year = this.today.getFullYear();

  public user = {
    cidade: '',
    dataNasc: '',
    genero: '',
  };

  constructor() { }

  ngOnInit() {
  }

  public saveidade() {
    this.user.dataNasc = this.dataNasc;
  }
  public savegen() {
    this.user.genero = this.genuser;
  }
  public savecity() {
    this.user.cidade = this.cityuser;
  }
  public printLog() {
    console.log(this.user);
  }

}
