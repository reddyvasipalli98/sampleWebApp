import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public skuData: SkuItem[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<SkuItem[]>(baseUrl + 'api/SampleData/WeatherForecasts').subscribe(result => {
      this.skuData = result;
    }, error => console.error(error));
  }
}

interface SkuItem {
  skuName: string;
  skuPrice: number;
  skuOfferPrice: number;
  skuDesc: string;
}
