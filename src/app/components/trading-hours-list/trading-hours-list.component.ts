import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITradingHoursListItem } from 'src/app/models/trading-hours-list.model';
import { DaysOfWeek } from './../../staticdata/days-of-week.data';
import { PricingPeriod } from 'src/app/models/pricing-period.model';


@Component({
  selector: 'app-trading-hours-list',
  templateUrl: './trading-hours-list.component.html',
  styleUrls: ['./trading-hours-list.component.scss']
})
export class TradingHoursListComponent implements OnInit {

  @Input() tradingHoursList: ITradingHoursListItem[];
  @Input() pricingPeriods: PricingPeriod[];
  @Output() upsertTradingHoursPricingPeriodEvent: EventEmitter<{tradingHoursId: number, pricingPeriodId: number}> = new EventEmitter();

  daysOfWeek: DaysOfWeek = new DaysOfWeek();

  displayedColumns: string[] = ["organisationTradingHoursID", "tradingHoursStart", "tradingHoursEnd", "organsationTradingHoursTypeID", "specificDay", "pricingPeriod_ID"];
  constructor() { }

  ngOnInit(): void {
    console.log(this.daysOfWeek);
    console.log(this.pricingPeriods);
  }

  updateTradingHoursPricingPeriod = (e, pp) => {
    this.upsertTradingHoursPricingPeriodEvent.emit({tradingHoursId: pp.organisationTradingHoursID , pricingPeriodId:e.value });    
  }

}
