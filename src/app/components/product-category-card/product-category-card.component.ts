import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProductCategory } from 'src/app/models/product-category.model';

import { DialogService } from './../../services/dialog.service';
import { AppState } from 'src/app/services/state.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-product-category-card',
  templateUrl: './product-category-card.component.html',
  styleUrls: ['./product-category-card.component.scss']
})
export class ProductCategoryCardComponent implements OnInit {

  @Input() productCategory: IProductCategory;
  @Output() categoryEditedEvent: EventEmitter<number> = new EventEmitter();
  constructor(private dialogs: DialogService, private store: AppState, private api: ApiService) { }

  ngOnInit(): void {
  }

  openSelectImage = () => {
    this.dialogs.openSelectCategoryImageDialog(this.productCategory).subscribe(result => {
      this.api.upsertProductCategoryImage(this.store.organisationId, result.categoryData.id, result.imageData.id).subscribe(data => {
        console.log(data);
        this.categoryEditedEvent.emit(result.categoryData.id);
      })
    })
  }

}
