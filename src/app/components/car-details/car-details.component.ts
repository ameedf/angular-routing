import { GeneralService } from './../../services/general.service';
import { Component, OnInit } from '@angular/core';
import { Car } from '../cars-list/cars-list.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  car: Car = {}
  constructor(private service: GeneralService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const name = params.get("carName");
      if (name) {
        const searchResult = this.service.getCarByName(name);
        if (searchResult) {
          this.car = searchResult;
        } else {
          this.router.navigate(['/cars']);
        }
      } else {
        this.router.navigate(['/cars']);
      }
    })
  }

}
