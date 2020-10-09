import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { IGetOrganisationPricingPeriods_Result } from './../../models/pricing-period-result.model';
import { AppState } from 'src/app/services/state.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-pricing-period',
  templateUrl: './pricing-period.view.html',
  styleUrls: ['./pricing-period.view.scss']
})
export class PricingPeriodView implements OnInit {
  
  pricingPeriodList: IGetOrganisationPricingPeriods_Result[] = [];
  pricingPeriodListLoaded: boolean = false;

  constructor(private api: ApiService, private store: AppState, private changeRef: ChangeDetectorRef) {
    this.getPricingPeriods();
   }

  ngOnInit(): void {
    // this.getPricingPeriods();
  }

  getPricingPeriods = () => {
    this.api.getOrganiationPricingPeriods(this.store.session.organisationId, false, false).subscribe((data: IGetOrganisationPricingPeriods_Result[]) => {
      this.pricingPeriodList = data;
      console.log(this.pricingPeriodList);
      this.pricingPeriodList.map((pp: IGetOrganisationPricingPeriods_Result) => {
        if(pp.periodStart != null){
            // pp.periodStart = this.setTime(pp.periodStart.value);
            pp.periodStart = this.parseTimeForPicker(pp.periodStart);
        }
        if(pp.periodEnd != null){
          // pp.periodEnd = this.setTime(pp.periodEnd.value);
          pp.periodEnd = this.parseTimeForPicker(pp.periodEnd);
        }
      });
      console.log(this.pricingPeriodList);
      this.pricingPeriodListLoaded = true;
    })
  }

  setTime = (dateToConvert) => {
    let t = new Date(0);
    return new Date(t.setTime((1000 * 60 * 60) * dateToConvert.hours + (t.getTimezoneOffset() * 60 * 1000))).toLocaleTimeString();
  }

  parseTimeForPicker = (rawTime: string) => {
    let elements = rawTime.split(":");
    // let elements2 = elements[2].split(" ");
    console.log(elements);
    // console.log(elements);  
    // console.log(elements2);
    return `${elements[0]}:${elements[1]} ${parseInt(elements[0]) < 13 ? 'AM' : 'PM'}`;
  }

  addRow = (newRow: IGetOrganisationPricingPeriods_Result) => {
    this.pricingPeriodList = [...this.pricingPeriodList, newRow];
    // this.api.addBlankPricingPeriod(this.store.session.organisationId).subscribe(data => {
    //   this.getPricingPeriods();
    // })
  }

  deleteRow = (rowIndex) => {
    console.log(this.pricingPeriodList.splice(rowIndex, 1));
    this.pricingPeriodList = [...this.pricingPeriodList];
  }

}
