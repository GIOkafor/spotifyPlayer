import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SearchService } from '../services/search.service';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  artist: any;
  albums: any;
  topTracks: any;

  constructor(
  	private route: ActivatedRoute,
  	private searchSvc: SearchService) { }

  ngOnInit() {
  	this.route.paramMap
  		.switchMap((params: ParamMap) => this.searchSvc.getArtist(params.get('id')))
  			.subscribe((res: artistResponse) => {
  				this.artist = res;
  				this.getAlbums(res.id);
  				this.getTopTracks(res.id);
  			})
  	
  }

  getArtist(id){
  	//console.log('getting info for artist with id: ', id);

  	this.searchSvc.getArtist(id)
  }
  getAlbums(id){
  	console.log('getting albums for artist with id: ', id);

  	this.searchSvc.getArtistAlbums(id)
  		.subscribe(res => this.albums = res);
  }
  getTopTracks(id){
  	this.searchSvc.getArtistTopTracks(id)
  		.subscribe(res => this.topTracks = res);
  }
  playUri(id){
  	console.log(id);

  	//reference player
  }
}

interface artistResponse{
	artist?: any;
	id?: any;
}