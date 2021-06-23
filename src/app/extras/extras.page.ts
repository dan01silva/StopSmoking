import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-extras',
  templateUrl: './extras.page.html',
  styleUrls: ['./extras.page.scss'],
})
export class ExtrasPage implements OnInit {

  constructor() { }

  async ngOnInit() {
    

const { Browser } = Plugins;

await Browser.open({ url: 'https://www.google.com/search?q=pare+de+fumar&sxsrf=ALeKk03jikLvv2C8CZZZYVb8qmYFpcsBBA:1624048591730&source=lnms&tbm=nws&sa=X&ved=2ahUKEwjBkKG7hKLxAhUCppUCHVdCA2gQ_AUoBHoECAEQBg&biw=1920&bih=937' });
  }

}
