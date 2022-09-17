import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  university=[
    {
    name:"Royal University of Cambodia",
    coverImage:"../../assets/images/rupp.jpg",
    logo:"../../assets/images/RUPP_logo.png"
  },
  {
    name:"Royal University of Cambodia",
    coverImage:"../../assets/images/rupp.jpg",
    logo:"../../assets/images/RUPP_logo.png"
  },
  {
    name:"Royal University of Cambodia",
    coverImage:"../../assets/images/rupp.jpg",
    logo:"../../assets/images/RUPP_logo.png"
  },

]

}
