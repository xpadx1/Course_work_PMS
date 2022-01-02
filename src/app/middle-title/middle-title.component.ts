import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-middle-title',
  templateUrl: './middle-title.component.html',
  styleUrls: ['./middle-title.component.scss']
})
export class MiddleTitleComponent implements OnInit {

  title: string

  constructor() { 
    this.title = 'Tour of Heroes';
  }

  ngOnInit(): void {
  }

}
