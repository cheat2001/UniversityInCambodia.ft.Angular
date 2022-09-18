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
    id:1,
    name:"Royal University of Cambodia",
    coverImage:"../../assets/images/rupp.jpg",
    logo:"../../assets/images/RUPP_logo.png"
  },
  {
    id:2,
    name:"Institute of Technology of Cambodia",
    coverImage:"../../assets/images/itcimage.jfif",
    logo:"../../assets/images/ITC_logo.png"
  },
  {
    id:3,
    name:"University of Health Sciences",
    coverImage:"../../assets/images/uhs.jpg",
    logo:"../../assets/images/UHS_Cambodia_logo.png"
  },

]

}
