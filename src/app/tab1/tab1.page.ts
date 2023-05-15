import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  onSave() {
    throw new Error('Method not implemented.');
    }
    constructor(private router:Router) {}

    isInputEnabled: boolean = false;
    isInputEnabled1: boolean = false;
    isInputEnabled2: boolean = false;
    // handlerMessage = '';
    // roleMessage = '';
    // name!:string;
    // age!:number;
    // sex!:any;
    // height!:number;
    // weight!:number;
    // color!:string;
    // food!:string;
    // line!:string;
    // facebook!:string;
    // instagram!:string;



    public handlerMessage: string = '';
public roleMessage: string = '';
public name: string = '';
public age: any;
public sex: any;
public height: any = '';
public weight: any = '';
public color: string = '';
public food: string = '';
public line: string = '';
public facebook: string = '';
public instagram: string = '';


  
    public alertButtons = [
      {
        text: 'ยกเลิก',
        role: 'cancel',
        handler: () => {
          this.handlerMessage = 'ยังไม่ได้บันทึกข้อมูล';
        },
      },
      {
        text: 'ตกลง',
        role: 'confirm',
        handler: () => {
          this.handlerMessage = 'บันทึกข้อมูลแล้ว';
          console.log('name: '+this.name);
          console.log('Age: ' + this.age);
          console.log('Sex: ' + this.sex);
          console.log('Height: ' + this.height);
          console.log('Weight: ' + this.weight);
          console.log('Favorite color: ' + this.color);
          console.log('Favorite food: ' + this.food);
          console.log('Line: ' + this.line);
          console.log('Facebook: ' + this.facebook);
          console.log('Instagram: ' + this.instagram);
        },
      },
    
    ];

    
    // setResult(ev:any) {
    //   this.roleMessage = `Dismissed with role: ${ev.detail.role}`;
    // }


    // navigateToTab2(){
    //   this.router.navigate(['/tab2']);
    //  }
  }
