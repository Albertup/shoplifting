import { Component, OnInit, Input } from '@angular/core';
import {ShopServiceService } from './../../shared/services/shop-service.service';
import { product } from './../../shared/models/product.model'
import { Router } from '@angular/router';
@Component({
  selector: 'app-prods-page',
  templateUrl: './prods-page.component.html',
  styleUrls: ['./prods-page.component.scss']
})
export class ProdsPageComponent implements OnInit {
  products?: product[];
  @Input() index: number = -1;
  @Input() productsx: product = {
    id: '',
    name: '',
    price: '',
    description: '',
    stars: 0,
    image: ''
  }

  constructor(private productsService: ShopServiceService, private router: Router) { }



  editButton(id: string){
    this.productsService.getProductById(id).subscribe((res: any) => {
      this.productsService.product = res;
      this.router.navigate(['/gestion']);
    });
  }

  deleteButton(id: string) {
    this.productsService.deleteProduct(id).subscribe((res: any) => {
      this.ngOnInit();
    });
  }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((res: any) => {
      this.products = res;
    })
  }


}
