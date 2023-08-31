import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  items = ['poo'+'patil'+50+20,'ppp','ooo',0,8];

  constructor(private router:Router){
   console.log('item--->',this.items);

  }

  routing(myName:string){
    this.router.navigateByUrl('/studentLogin')
    console.log(myName);
    this.navigation();
  }
  navigation(){
    this.router.navigateByUrl('/landing')
  }
  lazyLodingRouting(){
    this.router.navigateByUrl('/adminLogin')
  }
}
