import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}
  height!: number;
  weight!: number;
  bmiValue!: number;
  bmiMessage!: string;
  public sex: any;
  public age: any;

  calculateBMI() {
    if (this.sex = "male" && this.weight > 0 && this.height > 0) {
  //  (this.weight > 0 && this.height > 0) ;{
      // let finalBmi = this.weight *10 + (this.height *6.25)-(5*this.age)+5;
      let finalBmi = 66+(13.7 * this.weight)+(5*this.height)-(6.8*this.age);
      this.bmiValue = parseFloat(finalBmi.toFixed(2));
      // this.setBMIMessage();
    } 
    if (this.sex = "female" && this.weight > 0 && this.height > 0) {
      //  (this.weight > 0 && this.height > 0) ;{
          let finalBmi = this.weight *10 + (this.height * 6.25)- (this.age)-161;
          this.bmiValue = parseFloat(finalBmi.toFixed(2));
          // this.setBMIMessage();
        }
  }

  // private setBMIMessage() {
  //   if (this.bmiValue < 18.5) {
  //     this.bmiMessage = "Underweight"
  //   }
  
  //   if (this.bmiValue > 18.5 && this.bmiValue < 25) {
  //     this.bmiMessage = "Normal"
  //   }
  
  //   if (this.bmiValue > 25 && this.bmiValue < 30) {
  //     this.bmiMessage = "Overweight"
  //   }
  
  //   if (this.bmiValue > 30) {

  //     this.bmiMessage = "Obese"
  //   }
  // }
}
