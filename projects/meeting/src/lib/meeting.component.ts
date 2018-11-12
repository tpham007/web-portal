import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cos-meeting',
  template: `
    <p>
      meeting works!
    </p>
  `,
  styles: ['/metting.component.css']
})
export class MeetingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
