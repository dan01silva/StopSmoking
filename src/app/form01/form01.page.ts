import { Component, OnInit } from '@angular/core';
import { DateService } from '../services/date.service';
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


  public user;

  constructor(private service: DateService) { 
    this.user = this.service.user;
  }

  ngOnInit() {
  }

  public saveForm01() {
    this.user.dataNasc = this.dataNasc;
    this.user.genero = this.genuser;
    this.user.cidade = this.cityuser;
  }
  public printLog() {
    console.log(this.service.user);
  }

}
