import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AppState } from 'src/app/services/state.service';
import { ITradingHoursListItem } from 'src/app/models/trading-hours-list.model';
import { ITradingHoursType } from 'src/app/models/trading-hours-type-list-item.model';
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
  tradingHoursTypeList: ITradingHoursType[] = [];

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
    this.getOrganisationTradingHoursTypes();
    
  }

  getOrganisationPricingPeriods = () => {
    this.api.getOrganiationPricingPeriods(this.store.organisationId, false, false).subscribe((data: PricingPeriod[]) => {
      this.pricingPeriods = data;
      console.log(this.pricingPeriods);
    });
  }

  getOrganisationTradingHoursTypes = () => {
    this.api.getOrganisationTradingHoursTypes().subscribe((data: ITradingHoursType[]) => {
      this.tradingHoursTypeList = data;
      console.log(this.tradingHoursTypeList);
    })
  }

  upsertTHPP = (change: {tradingHoursId: number, pricingPeriodId: number}) => {
    // this.api.upsertTradingHours(this.store.organisationId, change.tradingHoursId, change.pricingPeriodId).subscribe((data) => {
    //   console.log(data);
    //   this.getOrganisationPricingPeriods();
    // })
  }

  addNewTradingHoursRow = () => {
    let blankTradingHoursRow: ITradingHoursListItem = {
      organsationTradingHoursTypeID: null,
      organisationTradingHoursTypeLabel: null,
      tradingHoursStart: null,
      tradingHoursEnd: null,
      pricingPeriod_ID: null,
      isNew: true,
      organisationId: this.store.organisationId
    };

    this.tradingHoursList = [...this.tradingHoursList, blankTradingHoursRow];
  }

  removeTradingHoursRow = (index: number) => {
    this.tradingHoursList.splice(index, 1);
    this.tradingHoursList = [...this.tradingHoursList];
  }

  upsertTradingHours = (tradingHours: ITradingHoursListItem) => {
    this.api.upsertTradingHours(tradingHours).subscribe(data => {
      console.log(data);
    })
  }
}
