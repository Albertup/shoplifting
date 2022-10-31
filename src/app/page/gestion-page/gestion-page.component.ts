import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShopServiceService } from 'src/app/shared/services/shop-service.service';
import { product } from './../../shared/models/product.model';
import { Router } from '@angular/router';



@Component({
  selector: 'app-gestion-page',
  templateUrl: './gestion-page.component.html',
  styleUrls: ['./gestion-page.component.scss']
})


export class GestionPageComponent implements OnInit {

  newProductForm!: FormGroup;

  submitted: boolean = false;

  id: string = '';

  constructor(private form: FormBuilder, private shopService: ShopServiceService, private router: Router) { }

  onSubmit() {
    this.submitted = true;
    if(this.newProductForm.valid){
      if(this.id === ''){
        const newProduct: product = {
          id: '',
          name: this.newProductForm.get('name')?.value,
          price: this.newProductForm.get('price')?.value,
          description: this.newProductForm.get('description')?.value,
          stars: this.newProductForm.get('stars')?.value,
          image: this.newProductForm.get('image')?.value,
        }
        this.shopService.addProduct(newProduct).subscribe();
      }

      else {
        const editProduct: product = {
          id: this.id,
          name: this.newProductForm.get('name')?.value,
          price: this.newProductForm.get('price')?.value,
          description: this.newProductForm.get('description')?.value,
          stars: this.newProductForm.get('stars')?.value,
          image: this.newProductForm.get('image')?.value,
        }
        this.shopService.editProduct(editProduct).subscribe();
        this.id = '';
      }

      this.newProductForm.reset();
      this.submitted = false;
      this.router.navigate(['/prods'])
    }
  }

  ngOnInit(): void {
    this.id = this.shopService.product.id;
    this.newProductForm = this.form.group({
      name: [this.shopService.product.name, [Validators.required, Validators.minLength(3)]],
      price: [this.shopService.product.price, [Validators.required, Validators.pattern(/[0-9]/)]],
      description: [this.shopService.product.description, [Validators.required, Validators.minLength(3)]],
      stars: [this.shopService.product.stars, [Validators.required, Validators.pattern(/^[0-5]$/)]],
      image: [this.shopService.product.image, [Validators.required, Validators.minLength(3)]],
    })


  }

}
