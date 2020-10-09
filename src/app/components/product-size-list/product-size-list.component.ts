import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProductListItem } from 'src/app/models/product-list.model';
import { IProductSizeListItem } from 'src/app/models/product-size-list.model';
import { StateKey } from '@angular/platform-browser';
import { AppState } from 'src/app/services/state.service';

@Component({
  selector: 'app-product-size-list',
  templateUrl: './product-size-list.component.html',
  styleUrls: ['./product-size-list.component.scss']
})
export class ProductSizeListComponent implements OnInit {

  @Input() productSizeList: IProductSizeListItem[];
  @Output() addProductSizeEvent: EventEmitter<IProductSizeListItem> = new EventEmitter();
  @Output() saveNewProductSizeEvent: EventEmitter<IProductSizeListItem> = new EventEmitter();
  @Output() deleteRowEvent: EventEmitter<number> = new EventEmitter();

  displayedColumns: string[] = ['id', 'sizeName', 'sizeMl', 'isActive', 'actions'];

  constructor(private store: AppState) { }

  ngOnInit(): void {
  }

  addRow = () => {
    let newRowItem: IProductSizeListItem = {
      productTypeID: 3,
      organisation_ID: this.store.organisationId,
      sizeName: null,
      isActive: true,
      sizeMl: null,
      isNew: true,
    }
    console.log(newRowItem);
    this.addProductSizeEvent.emit(newRowItem);
  }

  saveNewSize = (newSize: IProductSizeListItem) => {
    this.saveNewProductSizeEvent.emit(newSize);
  }

  removeRow = (index: number) => {
    this.deleteRowEvent.emit(index);
  }
}
