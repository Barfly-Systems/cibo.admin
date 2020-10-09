import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AppState } from 'src/app/services/state.service';
import { ITradingHoursListItem } from 'src/app/models/trading-hours-list.model';
import { HelperService } from './../../services/helper.service';
import { PricingPeriod } from 'src/app/models/pricing-period.model';

@Component({
  selector: 'app-trading-hour',
  templateUrl: './trading-hour.view.html',
  styleUrls: ['./trading-hour.view.scss']
})
export class TradingHourView implements OnInit {


  pricingPeriods: PricingPeriod[] = [];
  tradingHoursList: ITradingHoursListItem[] = [];

  constructor(private api: ApiService, private store: AppState) { }

  ngOnInit(): void {
    this.api.getOrganisationTradingHours(this.store.session.organisationId, false, false).subscribe((data: ITradingHoursListItem[]) => {
      data.map((thl: ITradingHoursListItem) => {
        // thl.tradingHoursStart =  HelperService.setTime(thl.tradingHoursStart);
        thl.tradingHoursStart = HelperService.parseTimeForPicker(thl.tradingHoursStart);
        // thl.tradingHoursEnd =  HelperService.setTime(thl.tradingHoursEnd);
        thl.tradingHoursEnd = HelperService.parseTimeForPicker(thl.tradingHoursEnd);
      })
      this.tradingHoursList = data;
      console.log(this.tradingHoursList);
    })

    this.getOrganisationPricingPeriods();
    
  }

  getOrganisationPricingPeriods = () => {
    this.api.getOrganiationPricingPeriods(this.store.organisationId, false, false).subscribe((data: PricingPeriod[]) => {
      this.pricingPeriods = data;
      console.log(this.pricingPeriods);
    });
  }

  upsertTHPP = (change: {tradingHoursId: number, pricingPeriodId: number}) => {
    this.api.upsertTradingHours(this.store.organisationId, change.tradingHoursId, change.pricingPeriodId).subscribe((data) => {
      console.log(data);
      this.getOrganisationPricingPeriods();
    })
  }

}
