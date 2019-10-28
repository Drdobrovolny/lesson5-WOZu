import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chapter1Page } from '../chapter1/chapter1'; 
import { Chapter2Page } from '../chapter2/chapter2';
import { Chapter3Page } from '../chapter3/chapter3';

@IonicPage()
@Component({
  selector: 'page-toc',
  templateUrl: 'toc.html',
})
export class TocPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TocPage');
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
