import { Component, OnInit } from '@angular/core';
import { faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  title: string = "TempTracker";
  faSun = faSun;

  ngOnInit(): void {
    console.log("initialized")
  }

}
