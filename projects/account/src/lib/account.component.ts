import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hub-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
  }

}

@Component({
  selector: 'hub-account-information',
  templateUrl: './account.information.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountInformationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
@Component({
  selector: 'hub-account-invoices',
  templateUrl: './account.invoices.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountInvoicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

}
