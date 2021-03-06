import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInformationComponent } from './product-information.component';

describe('ProductInformationComponent', () => {
  let component: ProductInformationComponent;
  let fixture: ComponentFixture<ProductInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
