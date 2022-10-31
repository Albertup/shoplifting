import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { product } from './../models/product.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ShopServiceService {

  url: string = 'http://localhost:3000/products';

  product: product = {
    id: '',
    name: '',
    price: '',
    description: '',
    image: '',
  }

  products?: any[];


  constructor(private http:HttpClient, private router: Router) {}

    getProducts(){
      return this.http.get(this.url);
    }

    addProduct(newProduct: product){
      return this.http.post(this.url, newProduct);
    }

    getProductById(id: string){
      return this.http.get(this.url + '/' + id);
    }

    editProduct(editProduct: product){
      return this.http.put(this.url + '/' + editProduct.id, editProduct);
    }

    deleteProduct(id: string){
      this.router.navigate(['/prods'])
      return this.http.delete(this.url + '/' + id);

    }
}
