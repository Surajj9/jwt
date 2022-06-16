import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  position:number;
  name: number;
  rate: number;
  hours: number;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 20, rate:20,hours:40},
  {position: 2, name: 20,  rate:40,hours:20},
  {position: 3, name:0 ,  rate:20,hours:20},
  {position: 4, name: 20, rate:40,hours:20},
  {position: 5, name: 0, rate:30,hours:20,},
 
];
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name','rate','hours'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
