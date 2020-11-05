import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITradingHoursListItem } from 'src/app/models/trading-hours-list.model';
import { DaysOfWeek } from './../../staticdata/days-of-week.data';
import { PricingPeriod } from 'src/app/models/pricing-period.model';
import { ITradingHoursType } from 'src/app/models/trading-hours-type-list-item.model';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'app-trading-hours-list',
  templateUrl: './trading-hours-list.component.html',
  styleUrls: ['./trading-hours-list.component.scss']
})
export class TradingHoursListComponent implements OnInit {

  @Input() tradingHoursList: ITradingHoursListItem[];
  @Input() pricingPeriods: PricingPeriod[];
  @Input() tradingHoursTypes: ITradingHoursType[];
  @Output() upsertTradingHoursPricingPeriodEvent: EventEmitter<{tradingHoursId: number, pricingPeriodId: number}> = new EventEmitter();
  @Output() newTradingHoursRowEvent: EventEmitter<boolean> = new EventEmitter();
  @Output() removeNewTrandingHoursRowEvent: EventEmitter<number> = new EventEmitter();
  @Output() upsertTradingHoursEvent: EventEmitter<ITradingHoursListItem> = new EventEmitter();

  daysOfWeek: DaysOfWeek = new DaysOfWeek();

  displayedColumns: string[] = ["organisationTradingHoursID", "tradingHoursStart", "tradingHoursEnd", "organsationTradingHoursTypeID", "specificDay", "pricingPeriod_ID", "Actions"];
  constructor() { }

  ngOnInit(): void {
    console.log(this.daysOfWeek);
    console.log(this.pricingPeriods);
  }

  updateTradingHoursPricingPeriod = (e, pp) => {
    this.upsertTradingHoursPricingPeriodEvent.emit({tradingHoursId: pp.organisationTradingHoursID , pricingPeriodId:e.value });    
  }

  addNewRow = () => {
    this.newTradingHoursRowEvent.emit(true);
  }

  removeRow = (index: number) => {
    console.log(index);
    this.removeNewTrandingHoursRowEvent.emit(index);    
  }

  saveNewTradingHours = (tradingHours: ITradingHoursListItem) => {
    let th = tradingHours
    th.tradingHoursStart = HelperService.convertPickerTimeToDateTimeObject(tradingHours.tradingHoursStart);
    th.tradingHoursEnd = HelperService.convertPickerTimeToDateTimeObject(tradingHours.tradingHoursEnd);
    
    this.upsertTradingHoursEvent.emit(th);
  }

  test = (el) => {
    console.log(el);
  }
}
