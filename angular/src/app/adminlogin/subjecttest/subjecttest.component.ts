import { Component } from '@angular/core';
import { DataService } from 'src/app/adminsignup/data.service';

@Component({
  selector: 'app-subjecttest',
  templateUrl: './subjecttest.component.html',
  styleUrls: ['./subjecttest.component.scss']
})
export class SubjecttestComponent {

  subjectData : any = 'Nitin'

  constructor(private dataService:DataService){}

  ngOnInit(){
    this.dataService.data.subscribe(refDataPara =>{
      this.subjectData = refDataPara
    })
    console.log('subjectData',this.subjectData);
    
  }
}
