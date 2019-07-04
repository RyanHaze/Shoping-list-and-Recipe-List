import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headerz',
  templateUrl: './headerz.component.html',
  styleUrls: ['./headerz.component.css']
})
export class HeaderzComponent implements OnInit {

  collapsed = true;

  constructor() { }

  ngOnInit() {
  }

}
