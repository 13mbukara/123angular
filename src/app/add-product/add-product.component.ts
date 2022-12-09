import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  addProductForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.addProductForm = this.fb.group({
      title: ['', Validators.required],
      price: ['', Validators.required],
      description: [''],
      image: ['', Validators.required],
      supplies: ['', [Validators.required, Validators.min(0)]],
    });
  }

  onSubmit() {
    alert('aleksa');
    console.log(this.addProductForm.value);
  }
}
