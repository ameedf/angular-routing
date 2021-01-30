import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  customers: Customer[] = [
    {id: 1, name:"dani", },
    {id: 2, name:"eli",},
    {id: 3, name:"neta",},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

interface Customer {
  id?: number;
  name?: string;
}