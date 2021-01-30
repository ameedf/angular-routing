import { GeneralService } from './../../services/general.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {
  cars: Car[] = [];

  constructor(private service: GeneralService) { }

  ngOnInit(): void {
    this.cars = this.service.getCars();
  }
}

export interface Car {
  id?: number;
  name?: string;
  imageUrl?: string;
}