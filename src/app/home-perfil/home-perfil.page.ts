import { Component, OnInit } from '@angular/core';
import { DateService } from '../services/date.service';

@Component({
  selector: 'app-home-perfil',
  templateUrl: './home-perfil.page.html',
  styleUrls: ['./home-perfil.page.scss'],
})
export class HomePerfilPage implements OnInit {
  public user;
  public date = new Date();

  public datahoje() {
    const dia = this.date.getDate();
    const mes = this.date.getMonth();
    const ano = this.date.getFullYear();

    return dia + '/' + (mes + 1) + '/' + ano;

}

constructor(private service: DateService) {
  this.user = this.service.user;
}

ngOnInit() {
}

}
