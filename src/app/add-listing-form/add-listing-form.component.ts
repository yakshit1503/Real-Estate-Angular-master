import { CribsService } from './../cribs.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'add-listing-form',
  templateUrl: './add-listing-form.component.html',
  styleUrls: ['./add-listing-form.component.css']
})
export class AddListingFormComponent implements OnInit {

  @ViewChild('newAddListing') newAddListing: NgForm

  constructor(private cribService: CribsService) { }

  ngOnInit() {
  }

  onListingSubmit(data){
    this.cribService.addCrib(data); 
    this.newAddListing.reset(); 
  }

}
