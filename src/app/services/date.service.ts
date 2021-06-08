import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { BemVindoPage } from '../bem-vindo/bem-vindo.page';

interface User{
      id: number;
      name: string;
      datanasc: string;
      genero: string;
      estado: string;
      qtdCigarrosPdia: number;
      valorMaco: number;
      qtdCigarrosPmaco: number;
    }

@Injectable({
  providedIn: 'root',
})
export class DateService {
  alertController: AlertController;

  constructor() { }

  public user = [
    {
      id: 1,
      name:  '',
      datanasc: '',
      genero: '',
      estado: '',
      qtdCigarrosPdia: '',
      valorMaco: '',
      qtdCigarrosPmaco: ''
    }
  ];

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'ATENÇÃO',
      subHeader: 'Campo inválido',
      message: 'Preencher os campos corretamente',
      buttons: ['OK']
    });
  }
}
