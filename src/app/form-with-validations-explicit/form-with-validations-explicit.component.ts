import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

function skuValidator(control: FormControl): { [s: string] : boolean } | null {
  if (!control.value.match(/^123/)) {
    return {invalidSku: true}
  }
  return null;
}

@Component({
  selector: 'app-form-with-validations-explicit',
  templateUrl: './form-with-validations-explicit.component.html',
  styleUrls: ['./form-with-validations-explicit.component.css']
})
export class FormWithValidationsExplicitComponent implements OnInit {
  myForm: FormGroup;
  sku: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.compose([
        Validators.required, skuValidator])]
    });
    this.sku = this.myForm.controls['sku'];
   }

  ngOnInit(): void {
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }

  

}
