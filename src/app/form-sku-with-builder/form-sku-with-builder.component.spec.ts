import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSkuWithBuilderComponent } from './form-sku-with-builder.component';

describe('FormSkuWithBuilderComponent', () => {
  let component: FormSkuWithBuilderComponent;
  let fixture: ComponentFixture<FormSkuWithBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSkuWithBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSkuWithBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
