import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-bem-vindo',
  templateUrl: './bem-vindo.page.html',
  styleUrls: ['./bem-vindo.page.scss'],
})
export class BemVindoPage implements OnInit {
  public nomeuser;

  public user = {
    nome: ' ',
  };

  constructor() { }

  ngOnInit() {
  }

  public savename() {
    this.user.nome = this.nomeuser;
  }

  logForm() {
    this.user
  }
}
