import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cos-project',
  template: `
    <p>
      project works!
    </p>
  `,
  styles: ['/project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
