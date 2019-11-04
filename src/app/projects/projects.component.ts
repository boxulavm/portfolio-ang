import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = [
    {
      title: 'GramShop Jagodina',
      desc: 'Landing page for local healhty food store.Built with Angular',
      link1: 'https://gramshopjagodina.com',
    },
    {
      title: 'Angular-Store',
      desc: 'Extended version of store app from angular docs',
      link1: 'https://bvm-store.netlify.com/',
      link2: 'https://github.com/boxulavm/angular-store',
    },
    {
      title: 'SpaceX Launches',
      desc: 'React app with SpaceX REST API',
      link1: 'https://spacexlaunchesbvm.netlify.com',
      link2: 'https://github.com/boxulavm/SpaceX_Launches',
    },
    {
      title: 'Chat-app',
      desc: 'Node.js real-time web applications with Socket.io ',
      link2: 'https://github.com/boxulavm/Chat-app',
    },
  ]

  codepen = [
    {
      title: 'JavaScript Slider',
      link: 'https://codepen.io/boxula_von_matterhorn/pen/jJdNoZ'
    },
    {
      title: 'JS search app with async/await',
      link: 'https://codepen.io/boxula_von_matterhorn/pen/bJydxR'
    },
    {
      title: 'Loan Calculator',
      link: 'https://codepen.io/boxula_von_matterhorn/pen/pmeQGe'
    },
    {
      title: 'Movie List - JS Classes',
      link: 'https://codepen.io/boxula_von_matterhorn/pen/joJeqR'
    },
    {
      title: 'Rock Paper Scissors Lizard Spock - game',
      link: 'https://codepen.io/boxula_von_matterhorn/pen/orqbMd'
    },
    {
      title: 'Form Validation',
      link: 'https://codepen.io/boxula_von_matterhorn/pen/xNYREr'
    },
    {
      title: 'CSS Gradient Background Picker',
      link: 'https://codepen.io/boxula_von_matterhorn/pen/KEzmGb'
    },
    {
      title: 'CSS Hamburger Menu',
      link: 'https://codepen.io/boxula_von_matterhorn/pen/QPErJx'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
