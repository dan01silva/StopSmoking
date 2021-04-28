import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-depoimentos',
  templateUrl: './depoimentos.page.html',
  styleUrls: ['./depoimentos.page.scss'],
})
export class DepoimentosPage implements OnInit {

  slides = [
    {
      data: "11/04/2021",
      titulo: "Dangai Mendes, 22 anos",
      depoimento: "Me chamo João e fumo desde os meus 17 anos, conheci o App StopSmoking e já estou 3 meses sem fumar, o app realmente tem me ajudado!",

    },
    {
      data: "03/02/2021",
      titulo: "Thiago Felipe, 22 anos",
      depoimento: "Estou 15 dias sem fumar, o app tem me ajudado muito, já cheguei a fumar 2 maços de cigarro por dia, valeu muito apena  ter baixado o app. <br> Antônio Mendonça, 45 anos",
    },
    {
      titulo: "Sarah Andrade, 38 anos",
      data: "26/04/2021",
      depoimento: "Eu e meu marido fumamos desde a época da escola, tentamos por diversas vezes parar mas sempre tivemos recaídas, o app StopSmoking realmente funciona, já estamos 6 meses sem fumar.",
    },
    {
      titulo: "Mariana Mendonça, 23 anos",
      data: "12/01/2021",
      depoimento: "Conheci o app StopSmoking através de uma amiga, já estou 45 dias sem fumar.",
    },
    {
      titulo: "Letícia Pereira, 29 anos",
      data: "19/03/2021",
      depoimento: "Achei que não conseguiria ficar uma semana sem fumar, já faz um mês que o app tem me ajudado, valeu muito apena ter baixado o StopSmoking.",
    },
    {
      titulo: "Estefano Gulpz, 31 anos",
      data: "21406/2020",
      depoimento: "Tenho problemas respiratórios devido ao consumo excessivo do tabaco, comecei a usar o app e tem me auxiliado muito a diminuir o consumo do cigarro.",
    },
    {
      titulo: "Aparecido da Cruz, 33 anos",
      data: "26/11/2020",
      depoimento: "O estresse do dia-a-dia sempre fazia eu descontar meus problemas no cigarro, minha filha me apresentou o app StopSmoking e já estou 2 meses sem fumar, me sinto bem melhor depois de ter conhecido o app.",
    },
    {
      titulo: "Leonardo França, 24",
      data: "30/12/2020",
      depoimento: "O primeiro e único app que realmente me ajudou a me livrar de vez do cigarro, estou 1 ano sem fumar, e pude passar o ano novo com minha família sem.",
    },
  ]

  constructor() { }

  public homepage = "http://localhost:8100/home-perfil"
  ngOnInit() {
  }
}
