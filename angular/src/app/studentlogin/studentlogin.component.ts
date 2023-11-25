import { Component } from '@angular/core';

@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.scss']
})
export class StudentloginComponent {

  name:string='nitin'

  ngOnInit(){//used to initialise at component 
    //it initilised only once 
    // it use for get or set data,API
    console.log('ngOnInit called');
    
  }
  ngOnChanges(){//it called when input box value bound new value
    // it called every event on input box
    console.log('ngOnChanges called');
    
  }
  ngDoCheck(){
    console.log('do ...');
    
  }
  ngAfterContentInit(){//called only once after doCheck
    console.log('ngAfterContentInit');
    
  }
  ngAfterContentChecked(){//triger after ngAfterContentInit
    // getting called after every docheck hook
    console.log('ngAfterContentChecked');
    
  }
  ngAfterViewInit(){//called once after the ngAfterContentCheck()
    console.log('ngAfterViewInit');
    
  }
  ngAfterViewChecked(){
    //called after ngAfterViewInit and every subsquent ngAfterContemtCheked()
    console.log('ngAfterViewChecked');
    
  }
  ngOnDestroy(){
    console.log('ngOnDestroy');
    
  }
}
