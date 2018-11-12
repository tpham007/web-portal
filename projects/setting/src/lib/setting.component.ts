import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cos-setting',
  template: `
    <p>
      setting works!
    </p>
  `,
  styles: ['/setting.component.css']
})
export class SettingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
