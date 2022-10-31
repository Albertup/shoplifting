import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { product } from './../../models/product.model'
import { ShopServiceService } from 'src/app/shared/services/shop-service.service';
import {RatingModule} from 'primeng/rating';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() index: number = -1;
  @Input() product: product = {
    id: '',
    name: '',
    price: '',
    description: '',
    stars: 0,
    image: ''
  }

  constructor(private router: Router, private stars: RatingModule) { }



  ngOnInit(): void {

  }

}
