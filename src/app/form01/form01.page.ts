import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form01',
  templateUrl: './form01.page.html',
  styleUrls: ['./form01.page.scss'],
})
export class Form01Page implements OnInit {
  public idadeuser;
  public genuser;
  public cityuser;

  public user = {
    nome: ' ',
  };

  constructor() { }

  ngOnInit() {
  }

  public saveidade() {
    this.user.nome = this.idadeuser;
  }
  public savegen() {
    this.user.nome = this.genuser;
  }
  public savecity() {
    this.user.nome = this.cityuser;
  }
  

  logForm() {
    this.user
  }

}
