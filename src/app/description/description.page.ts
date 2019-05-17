import { Component } from '@angular/core';
import { NavController,NavParams} from '@ionic/angular';
//import { IonicPage, NavController, NavParams } from '@ionic/angular';
import { HeroService } from 'src/app/app/providers/hero-service/hero-service.ts.service';
import  {Hero} from 'src/app/app/providers/Models/Hero';



@Component({
  selector: 'page-description',
  templateUrl: 'description.html',
})
export class DescriptionPage {
  public id;
  public obj: any;
  public hero: Hero;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public heroService: HeroService) {
    this.id = navParams.get("id");
    
    this.hero = new Hero();
    this.heroService.getDescription(this.id)
    .then(data => {
      this.obj = data;
      console.log(this.obj);
      this.hero.name = this.obj.data.results[0].name; 
      this.hero.thumb = this.obj.data.results[0].thumbnail.path +"."+ this.obj.data.results[0].thumbnail.extension;
      this.hero.description =  this.obj.data.results[0].description;

      console.log(this.hero);
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DescriptionPage');
  }

}

