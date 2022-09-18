import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent implements OnInit {

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
  {
    id:4,
    name:"Royal University of Cambodia",
    coverImage:"../../assets/images/rupp.jpg",
    logo:"../../assets/images/RUPP_logo.png"
  },
  {
    id:5,
    name:"Institute of Technology of Cambodia",
    coverImage:"../../assets/images/itcimage.jfif",
    logo:"../../assets/images/ITC_logo.png"
  },
  {
    id:6,
    name:"University of Health Sciences",
    coverImage:"../../assets/images/uhs.jpg",
    logo:"../../assets/images/UHS_Cambodia_logo.png"
  },
  {
    id:7,
    name:"Royal University of Cambodia",
    coverImage:"../../assets/images/rupp.jpg",
    logo:"../../assets/images/RUPP_logo.png"
  },
  {
    id:8,
    name:"Institute of Technology of Cambodia",
    coverImage:"../../assets/images/itcimage.jfif",
    logo:"../../assets/images/ITC_logo.png"
  },
  {
    id:9,
    name:"University of Health Sciences",
    coverImage:"../../assets/images/uhs.jpg",
    logo:"../../assets/images/UHS_Cambodia_logo.png"
  },
]
}
