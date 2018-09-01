import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  inputField: FormControl = new FormControl();
  searchResult: any = [];

  constructor(
  	public searchSvc: SearchService) { }

  ngOnInit() {
  	this.inputField.valueChanges
  		.subscribe(inputField => this.searchSvc.searchArtists(inputField)
  		.subscribe((res: any) => {
  			if (res.status === 400) {
  				this.searchResult = [];
  				return;
  			}
  			else { this.searchResult = res.artists.items; console.log(res.artists.items); }
  		}));
  }

}

interface Response{
	status?: any;
	artists?: any;
}
