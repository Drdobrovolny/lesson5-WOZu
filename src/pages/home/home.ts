import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TocPage } from '../toc/toc';
import { Chapter1Page } from '../chapter1/chapter1'; 
import { Chapter2Page } from '../chapter2/chapter2';
import { Chapter3Page } from '../chapter3/chapter3';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController) {

  }
  launchToc(){
     this.navCtrl.push(TocPage);
  };
  launchChapter1(){
    this.navCtrl.push(Chapter1Page); 
  };
  launchChapter2(){
    this.navCtrl.push(Chapter2Page); 
  };
  launchChapter3(){
    this.navCtrl.push(Chapter3Page); 
  }

}
