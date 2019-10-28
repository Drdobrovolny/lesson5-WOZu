import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TocPage } from '../toc/toc';
import { Chapter1Page } from '../chapter1/chapter1'; 
import { Chapter2Page } from '../chapter2/chapter2';


/**
 * Generated class for the Chapter3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chapter3',
  templateUrl: 'chapter3.html',
})
export class Chapter3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Chapter3Page');
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



