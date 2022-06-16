import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  symbol: string;}
  export interface periodicElement{
  position:string;
  weight:string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { name:'client' ,  symbol:'EZCORP'},
  { name:'project' ,  symbol:'EZCORP Microservices'},
  { name:'SOW',  symbol:'https://vrize.sharepoint.co'},]

  const Diff_Data:periodicElement[]=[
    {position:'start date',weight:'monday'},
    {position:'as of date',weight:'sunday'},
    {position:'end date',weight:'sunday'}
    
  ]


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  displayedColumns: string[] = ['name' ,  'symbol'];
  dataSource = ELEMENT_DATA;
 
    displayedColumn: string[] = ['position' ,  'weight'];
    dataSource1 = Diff_Data;

  constructor() { }

  ngOnInit(): void {
  }

}
