import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IGetProductTypeList_Result } from 'src/app/models/get-product-type-list.model';

@Component({
  selector: 'app-product-type-list',
  templateUrl: './product-type-list.component.html',
  styleUrls: ['./product-type-list.component.scss']
})
export class ProductTypeListComponent implements OnInit {

  @Input() productTypeList: IGetProductTypeList_Result[] = [];
  @Output() addProductTypeRowEvent: EventEmitter<boolean> = new EventEmitter();
  @Output() removeRowEvent: EventEmitter<number> = new EventEmitter();
  @Output() saveNewTypeEvent: EventEmitter<IGetProductTypeList_Result> = new EventEmitter();

  displayedColumns = ['name', 'actions'];

  constructor() { }

  ngOnInit(): void {
  }

  addRow = () => {
    this.addProductTypeRowEvent.emit(true);
  }

  removeRow = (index) => {
    this.removeRowEvent.emit(index);
  }

  saveNewType = (newProductType: IGetProductTypeList_Result) => {
    this.saveNewTypeEvent.emit(newProductType);
  }

}
