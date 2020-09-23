import { Component, OnInit, Input } from '@angular/core';
import { IProductCategory } from 'src/app/models/product-category.model';

import { DialogService } from './../../services/dialog.service';
import { AppState } from 'src/app/services/state.service';

@Component({
  selector: 'app-product-category-card',
  templateUrl: './product-category-card.component.html',
  styleUrls: ['./product-category-card.component.scss']
})
export class ProductCategoryCardComponent implements OnInit {

  @Input() productCategory: IProductCategory;

  constructor(private dialogs: DialogService, private store: AppState) { }

  ngOnInit(): void {
  }

  openSelectImage = () => {
    this.dialogs.openSelectCategoryImageDialog(this.productCategory);
  }

}
