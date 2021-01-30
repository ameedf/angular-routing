import { Car } from './../components/cars-list/cars-list.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  private cars: Car[] = [
    { id: 1, name: "volvo", imageUrl: "https://www.cigarmag.co.il/prdPics/3644_desc3_2_1_1585158307.jpg" },
    { id: 2, name: "bmw", imageUrl: "https://www.bmw.co.il/content/dam/bmw/common/all-models/1-series/5-door/2019/navigation/bmw-1-series-modelfinder.png" },
    { id: 3, name: "mazda", imageUrl: "https://www.mazda.co.il/Uploads//ProductPage/model_page_mazda%20cx-30/Mazda_3_Sedan_gallery/25577%20mazda%20CX-30%20Galleries%20Out%201600x7202019_CX-30_EU(LHD)_2_C11_3DR_AWD.jpg" },
  ];
  constructor() { }

  getCarByName(carName: string): Car | undefined {
    return this.cars.find(c => c.name === carName);
  }

  getCars(): Car[] {
    return this.cars;
  }
}
