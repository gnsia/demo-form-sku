import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNgModelComponent } from './form-ng-model.component';

describe('FormNgModelComponent', () => {
  let component: FormNgModelComponent;
  let fixture: ComponentFixture<FormNgModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNgModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNgModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
