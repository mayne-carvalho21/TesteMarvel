import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Md5 } from 'ts-md5/dist/md5';
import 'rxjs/add/observable/of';

@Injectable()
export class HeroService {
  static TsService(TsService: any): any {
    throw new Error("Method not implemented.");
  }
  data: any;
  constructor(public http: Http) {
    console.log('MarvelApi');
  }

  load() {
    if (this.data) {
      return Promise.resolve(this.data);
    }


    return new Promise(resolve => {

      let md5 = new Md5();
      
      var timestamp = Number(new Date());
      var hash = Md5.hashStr(timestamp + 'ab8c63bd79c1dcfd2ea03e83ee373511a4df284c1cdfda0c36908c5f989c97e80637840b');

      this.http.get(`https://gateway.marvel.com/v1/public/characters?ts=1&orderBy=name&limit=30&apikey=1${hash}=a4df284c1cdfda0c36908c5f989c97e80637840b`)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
    getDescription(id: number) {
      return new Promise(resolve => {
        let md5 = new Md5();
  
        var timestamp = Number(new Date());
        var hash = Md5.hashStr(
          timestamp +
            "a4df284c1cdfda0c36908c5f989c97e80637840b"
        );
  
        this.http
          .get(
            `https://gateway.marvel.com/v1/public/characters/${id}?ts=${timestamp}&orderBy=name&limit=20&apikey=a4df284c1cdfda0c36908c5f989c97e80637840b&hash=${hash}`
          )
          .map(res => res.json())
          .subscribe(data => {
            this.data = data;
            resolve(this.data);
          });
      });
    }
  }




