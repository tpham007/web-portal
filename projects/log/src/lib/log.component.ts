import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cos-log',
  template: `
    <iframe frameborder="0" src="http://localhost:5601/app/kibana#/dashboard/7adfa750-4c81-11e8-b3d7-01146121b73d?embed=true&_g=(refreshInterval%3A(pause%3A!f%2Cvalue%3A900000)%2Ctime%3A(from%3Anow-24h%2Cmode%3Aquick%2Cto%3Anow))" height="600" width="100%"></iframe>
  `,
  styles: ['/log.component.css']
})
export class LogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
