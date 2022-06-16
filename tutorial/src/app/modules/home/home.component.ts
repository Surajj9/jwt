import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  position:number;
  name: string;
  rate: any;
  hours: number;
  labourcost: string;
  role:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Ravichandran', rate:'$'+0,hours:0,labourcost:'$'+0,role:'lead developer full stack'},
  {position: 2, name: 'Sivaraman',  rate:'$'+0,hours:0,labourcost:'$'+0,role:'test engineer'},
  {position: 3, name: 'Sunil yadav',  rate:'$'+0,hours:0,labourcost:'$'+0,role:'developers'},
  {position: 4, name: 'Rohit dutta', rate:'$'+0,hours:0,labourcost:'$'+0,role:'developers'},
  {position: 5, name: 'Meera n', rate:'$'+0,hours:0,labourcost:'$'+0,role:'sr developers'},
 
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name','rate','hours','labourcost','role'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
