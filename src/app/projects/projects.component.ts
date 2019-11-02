import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = [
    {
      title: 'Chat-app',
      desc: 'Node.js real-time web applications with Socket.io ',
      link1: 'https://bvm-chat-app.herokuapp.com/',
      link2: 'https://github.com/boxulavm/Chat-app',
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
      title: 'Search Users App',
      desc: 'React App with JSONplaceholder, React Router, Context API ',
      link1: 'https://condescending-mirzakhani-56d613.netlify.com',
      link2: 'https://github.com/boxulavm/React-search-users-app',
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
