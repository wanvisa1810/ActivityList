import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';


/**
 * Generated class for the NewactivityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newactivity',
  templateUrl: 'newactivity.html',
})
export class NewactivityPage {
  title:any;
  description:any;
  addedTodo:any[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage) {
      this.storage = storage;
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewactivityPage');
  }
  saveRecords():void{
    let todoObj = {
      title:"",
      description:""
    };

    todoObj.title = this.title;
    todoObj.description = this.description;
    this.storage.get('todoDetails').then((val) => {
      if(val){
        this.addedTodo = val;
        this.addedTodo.push(todoObj);
        this.storage.set('todoDetails', this.addedTodo);
      }else{
        this.addedTodo.push('todoObj');
        this.storage.set('todoDetails', this.addedTodo);
      }
    });
    this.title="";
    this.description="";
    this.navCtrl.pop();
  }
}

