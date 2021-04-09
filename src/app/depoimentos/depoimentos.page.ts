import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-depoimentos',
  templateUrl: './depoimentos.page.html',
  styleUrls: ['./depoimentos.page.scss'],
})
export class DepoimentosPage implements OnInit {

  slides = [
    {
      titulo: "Welcome to the Docs!",
      description: "The <b> Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      titulo: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "assets/img/ica-slidebox-img-2.png",
    },
    {
      titulo: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "assets/img/ica-slidebox-img-3.png",
    },
    {
      titulo: "Danzinws",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "assets/img/ica-slidebox-img-3.png",
    }
  ];
  constructor() { }

  ngOnInit() {
  }
  public depoiments() {
    var depoimento01 = 'Comecei a fumar influenciado pelos amigos da escola.Eram cigarros com cheiros e gostos atrativos, como gudang, cigarros mentolados.Quando vi, já era viciado.Aos 27 anos, fumava três carteiras de cigarro por dia.Gastava em torno de R$ 320 por mês.Não tinha mais fôlego para subir escadas, minhas roupas ficavam manchadas, pois eu transpirava cigarro.Minha saúde ficou debilitada.Um dia, precisei vir ao Pama 1(bairro Czerniewicz) e vi um cartaz sobre o Programa Municipal de Controle do Tabagismo.Subi as escadas, quase sem fôlego, e perguntei sobre o programa.A coordenadora disse que ia me ligar quando fosse aberto um novo grupo.Não imaginei que realmente fossem me ligar, mas ligaram.Sozinho, eu já tinha tentado parar.Quando acordava, pensava: "hoje não vou fumar".Mas a vontade não durava mais que meia hora e eu já me pegava fumando.Ao mesmo tempo, não me conformava que o cigarro estava sendo mais forte que eu.Comecei a participar do programa, usei adesivo de nicotina, antidepressivo e estipulei uma data para parar de fumar.A partir daquele dia, nunca mais fumei.Já faz um ano.Foi no dia 15 de maio de 2013';

  };
}
