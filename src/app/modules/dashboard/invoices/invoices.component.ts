import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {

  upcomingInvoices = [
    { school: 'School A', amount: 1000, dueDate: new Date(), status: 'Pending' },
    { school: 'School B', amount: 1500, dueDate: new Date(), status: 'Pending' }
  ];

  constructor() { }

  ngOnInit(): void { }

}
