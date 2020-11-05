import { Component, OnInit, Input } from '@angular/core';
import { IOrganisationDetails } from 'src/app/models/organisation-details.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-organisation-details',
  templateUrl: './organisation-details.component.html',
  styleUrls: ['./organisation-details.component.scss']
})
export class OrganisationDetailsComponent implements OnInit {

  @Input() organisationDetails: IOrganisationDetails;

  constructor() { }

  ngOnInit(): void {
  }

}
