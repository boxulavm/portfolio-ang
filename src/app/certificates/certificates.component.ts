import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {

  constructor() { }

  certificates = [
    {
      name: "Web Development"
    },
    {
      name: "Modern JavaScript"
    },
    {
      name: "JS Algorithm Scripting"
    },
    {
      name: "The Complete Node.js Developer"
    },
    {
      name: "React 2019"
    }
  ]

  ngOnInit() {
  }

}
