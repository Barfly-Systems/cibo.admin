import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { IGetOrganisationPricingPeriods_Result } from './../../models/pricing-period-result.model';

@Component({
  selector: 'app-pricing-period',
  templateUrl: './pricing-period.view.html',
  styleUrls: ['./pricing-period.view.scss']
})
export class PricingPeriodView implements OnInit {

  pricingPeriodList: IGetOrganisationPricingPeriods_Result[] = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getOrganiationPricingPeriods(1000012, false, false).subscribe((data: IGetOrganisationPricingPeriods_Result[]) => {
      this.pricingPeriodList = data;
      console.log(this.pricingPeriodList);
    })
  }

}
