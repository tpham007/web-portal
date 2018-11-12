import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cos-report',
  template: `
    <p>
      report works!
    </p>
  `,
  styles: ['/report.component.css']
})
export class ReportComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
