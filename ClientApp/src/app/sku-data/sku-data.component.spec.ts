import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkuDataComponent } from './sku-data.component';

describe('SkuDataComponent', () => {
  let component: SkuDataComponent;
  let fixture: ComponentFixture<SkuDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkuDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkuDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
