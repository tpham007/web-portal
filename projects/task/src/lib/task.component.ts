import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cos-task',
  template: `
    <p>
      task works!
    </p>
  `,
  styles: ['/task.component.css']
})
export class TaskComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
