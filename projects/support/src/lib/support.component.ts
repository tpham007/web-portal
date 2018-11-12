import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cos-support',
  template: `
    <p>
      support works!
    </p>
  `,
  styles: ['/support.component.css']
})
export class SupportComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
