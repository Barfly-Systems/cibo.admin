import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AppState } from 'src/app/services/state.service';
import { IOrganisationDetails } from '../../models/organisation-details.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.view.html',
  styleUrls: ['./organisation.view.scss']
})
export class OrganisationView implements OnInit {

  organisationDetails: IOrganisationDetails;
  
  constructor(private api: ApiService, private store: AppState, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.api.getOrganisationDetails(this.store.organisationId).subscribe((data: IOrganisationDetails) => {
      this.organisationDetails = data;
      console.log(this.organisationDetails);
    })
    console.log(this.route.snapshot.data["instruction"]);
  }

}
