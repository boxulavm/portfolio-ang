import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {

  logos = [

    {
      img: '../../assets/img/node.svg'
    },
    {
      img: '../../assets/img/angular.png'
    },
    {
      img: '../../assets/img/react.png'
    },
    {
      img: '../../assets/img/js.png'
    },
    {
      img: '../../assets/img/css.png'
    },
    {
      img: '../../assets/img/html5.png'
    },

  ]

  constructor() { }

  ngOnInit() {
  }

}
