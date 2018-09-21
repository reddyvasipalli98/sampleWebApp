import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sku-data',
  templateUrl: './sku-data.component.html',
  styleUrls: ['./sku-data.component.css']
})
export class SkuDataComponent implements OnInit {

  @Input() skuItemName: string;

  constructor() { }

  ngOnInit() {
  }

}
