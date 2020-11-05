import { Component, OnInit, ElementRef, QueryList } from '@angular/core';
import { ITable } from 'src/app/models/table.model';
import { ApiService } from 'src/app/services/api.service';
import { AppState } from 'src/app/services/state.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.view.html',
  styleUrls: ['./tables.view.scss']
})
export class TablesView implements OnInit {

  tableList: ITable[] = [];

  constructor(private api: ApiService, private store: AppState) { }

  ngOnInit(): void {
    this.getTables(false, null);
  }

  getTables = (addNewRow: boolean, ref: QueryList<any>) => {
    this.api.getTablesList(this.store.organisationId).subscribe((data: ITable[]) => {
      this.tableList = data;
      if(addNewRow){
        this.addBlankTable();
        console.log(ref);
        console.log(ref.last.nativeElement);
        ref.last.nativeElement.focus();
      }
    })
  }

  saveTable = (change: {newTable: ITable,createNewRow:boolean, ref: QueryList<any>}) => {
    this.api.addTable(this.store.organisationId, change.newTable.tableNumber).subscribe(data => {
      this.getTables(change.createNewRow, change.ref);
    })
  }

  addBlankTable = () => {
    let newTable: ITable = {
      organisationId: this.store.organisationId,
      tableNumber: null,
      isNew: true
    };
    this.tableList = [...this.tableList, newTable];

  }
}
