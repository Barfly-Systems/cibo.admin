import { Component, OnInit, OnChanges, Input, Output, EventEmitter, ElementRef, ViewChild, ViewChildren, QueryList, SimpleChanges, SimpleChange } from '@angular/core';
import { NgxMaterialTimepickerTheme } from 'ngx-material-timepicker';
import { IGetOrganisationPricingPeriods_Result } from 'src/app/models/pricing-period-result.model';
import { PricingPeriod } from 'src/app/models/pricing-period.model';
import { HelperService } from 'src/app/services/helper.service';
import { AppState } from 'src/app/services/state.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-pricing-period-list',
  templateUrl: './pricing-period-list.component.html',
  styleUrls: ['./pricing-period-list.component.scss']
})
export class PricingPeriodListComponent implements OnInit, OnChanges {

  @Input() pricingPeriodList: IGetOrganisationPricingPeriods_Result[];
  @Output() addRowEvent: EventEmitter<IGetOrganisationPricingPeriods_Result> = new EventEmitter();
  @Output() deleteRowEvent: EventEmitter<number> = new EventEmitter();
  @Output() reloadTableEvent: EventEmitter<true> = new EventEmitter();
  @ViewChildren('.newRow') newRows: QueryList<Input>;

  displayedColumns: string[] = ["periodName", "periodStart", "periodEnd", "actions"]

  picker = {};

  constructor(private myElement: ElementRef, private store: AppState, private api: ApiService) { }

  ngOnInit(): void {
    // console.log(this.pricingPeriodList[0].periodStart);
    console.log(this.store.organisationId);
    console.log(typeof this.store.organisationId);
  }

  ngOnChanges = (changes: SimpleChanges) => {
    console.log("changed");
    console.log(changes);
  }

  addRow = () => {
    let newRow: IGetOrganisationPricingPeriods_Result = {
      id: null,
      periodNumber: null,
      periodStart: null,
      periodEnd: null,
      periodName: null,
      isNew: true
    };
    this.addRowEvent.emit(newRow);
    console.log(this.pricingPeriodList);
  }

  saveRow = (row) => {
    console.log(row);
    let startPeriod =  HelperService.convertPickerTimeToDateTimeObject(row.periodStart);
    let endPeriod = HelperService.convertPickerTimeToDateTimeObject(row.periodEnd);
    let newPricingPeriod: PricingPeriod = {
      organisationId: this.store.session.organisationId,
      periodNumber: null,
      periodStart: startPeriod,
      periodEnd: endPeriod,
      isActive: true,
      isArchived: false,
      createdOn: new Date().toISOString(),
      editedOn: new Date().toISOString(),
      periodName: row.periodName
    };
    console.log(JSON.stringify(newPricingPeriod));
    this.api.addPricingPeriod(newPricingPeriod).subscribe(data => {
      if(data === 1){
        this.reloadTableEvent.emit(true);
      }
    })
  }

  removeRow = (row) => {
    this.deleteRowEvent.emit(row);
    // console.log(row);
    // console.log(this.pricingPeriodList[row]);
    // console.log(this.pricingPeriodList.splice(row, 1));
    // this.pricingPeriodList.splice(row, 0);
  }

  showModel = (model) => {
    console.log(model);
  }
}


