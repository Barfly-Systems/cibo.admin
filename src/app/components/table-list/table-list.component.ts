import { Component, OnInit, Input, Output, EventEmitter, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { ITable } from '../../models/table.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit {

  @Input() tableList: ITable[] = [];
  @Output() addBlankTableEvent: EventEmitter<boolean> = new EventEmitter();
  @Output() saveTableEvent: EventEmitter<{newTable: ITable,createNewRow:boolean, ref: QueryList<any>}> = new EventEmitter();
  @ViewChildren('.newRow') rows: QueryList<any>;

  displayedColumns: string[] = ["id", "table", "actions"];

  constructor(private api: ApiService) { }

  ngOnInit(): void {}

  addNewRow = () => {
    this.addBlankTableEvent.emit(true);
    console.log(this.tableList);
  }

  saveTable = (newTable: ITable, createNewRow: boolean) => {
    this.saveTableEvent.emit({newTable: newTable, createNewRow: createNewRow, ref: this.rows});
  } 

}
