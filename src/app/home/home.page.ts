import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

//import { HeroService } from '';
import {HeroService} from 'src/app/app/providers/hero-service/hero-service.ts.service'

@Component({
  selector: 'page-home',
})
export class HomePage {
  public obj: any;
  public heroes: any;
  
  constructor(public navCtrl: NavController, public heroService: HeroService) {
    this.getAllHeroes();
  }

  getAllHeroes() {
    this.heroService.load()
      .then(data => {
        this.obj = data;
        this.heroes = this.obj.data.results;
      });
  }
  getDescription(id:number){
    console.log(id);
    this.navCtrl.push("DescriptionPage", {
      id: id
    })
  }

}
