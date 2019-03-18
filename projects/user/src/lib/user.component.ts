import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hub-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() {
  
  }

}

@Component({
  selector: 'hub-user-harmonicid',
  templateUrl: './user.harmonicid.component.html',
  styleUrls: ['./user.component.css']
})
export class UserHarmonicIdComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
