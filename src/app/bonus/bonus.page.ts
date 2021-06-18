import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { ScreenReader } from '@capacitor/screen-reader';

@Component({
  selector: 'app-bonus',
  templateUrl: './bonus.page.html',
  styleUrls: ['./bonus.page.scss'],
})
export class BonusPage implements OnInit {

  constructor() { }

  async ngOnInit() {
    

const { Device } = Plugins;

const info = await Device.getInfo();
console.log(info);



};

  }