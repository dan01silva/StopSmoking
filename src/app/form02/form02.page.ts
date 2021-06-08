import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DateService } from '../services/date.service';

@Component({
  selector: 'app-form02',
  templateUrl: './form02.page.html',
  styleUrls: ['./form02.page.scss'],
})
export class Form02Page implements OnInit {
  public qtdcigarros;
  public valorMacoCig;
  public qntdcigmaco;

  public user;

  constructor(private service: DateService) {
    this.user = this.service.user;
  }

  ngOnInit() {
  }

  public savecig() {
    if (this.qtdcigarros || this.valorMacoCig || this.qntdcigmaco == null) {
      return;
    } else {
      this.user.qtdCigarrosPdia = this.qtdcigarros;
      this.user.valorMaco = this.valorMacoCig;
      this.user.qtdCigarrosPmaco = this.qntdcigmaco;
    }
  }
  public printLog() {
    console.log(this.user);
  }
}
