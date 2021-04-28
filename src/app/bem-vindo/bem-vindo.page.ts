import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-bem-vindo',
  templateUrl: './bem-vindo.page.html',
  styleUrls: ['./bem-vindo.page.scss'],
})
export class BemVindoPage implements OnInit {
  public nomeuser = '';

  constructor() {
  }

  ngOnInit() {
  }

  public savename() {
    this.nomeuser = this.nomeuser;
    console.log(this.nomeuser);
  }

}
