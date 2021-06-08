import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { DateService } from '../services/date.service';

@Component({
  selector: 'app-bem-vindo',
  templateUrl: './bem-vindo.page.html',
  styleUrls: ['./bem-vindo.page.scss'],
})
export class BemVindoPage implements OnInit {
  public nomeuser;

  public user;

  constructor(private service: DateService, private alert: AlertController, private navCtrl: NavController) {
    this.user = this.service.user;
  }

  ngOnInit() {
  }

  
  // em implatação
  // public validation() {
  //   if (this.nomeuser == '' || this.nomeuser == null) {
  //     this.service.presentAlert();
  //   }
  //   this.savename();
  // }

  public savename() {
    this.user.name = this.nomeuser;
    //mostrando valor armazenado
    console.log(this.service.user);
  }
}
