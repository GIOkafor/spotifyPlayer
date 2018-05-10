import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class SearchService {
  
  private clientId = '8675db4b14744bf7947e23ce79bafd6d';
  private client_secret = 'fe646f8f3bc94341b7e067ea378ef2f9';
  private artistUrl = 'https://api.spotify.com/v1/search?type=artist&limit=10&client_id=' +this.clientId+'&q=';
  private authCode = 'BQCE64KrEj1WL2Z__7DRMNQGTfW08D3EeGngO9G-rWsQD_Fadm1aB-6fuI8sOBaiG3mpJQkrXZ5Kf33ka0HWXNYBcYjNlhGkYFQhIEUQLvMlG8T2kbXstpgGGVE4c2gvfvPw-tQYW_CFcxe2YB4KYc5T5lViH6IcDH4';
  public httpOptions = {
	  headers: new HttpHeaders({
	    'Content-Type':  'application/json',
	    'Authorization': 'Bearer ' + (this.authCode)
	  })
	};
  constructor(
  	private http: HttpClient) { }

  //finds artists with name
  searchArtists(searchTerm){
  	let url = this.artistUrl + searchTerm;

  	return this.http.get(url, this.httpOptions)
  		.map(res => res);
  }

  //get single artist with id
  getArtist(id){
  	let url = 'https://api.spotify.com/v1/artists/' + id;

  	return this.http.get(url, this.httpOptions)
  		.map(res => res);
  }

  //gets an artist's albums
  getArtistAlbums(id){
  	let url = 'https://api.spotify.com/v1/artists/' + id + '/albums';

  	return this.http.get(url, this.httpOptions)
  		.map(res => res);

  }

  //gets artist top tracks
  getArtistTopTracks(id){
  	let url = 'https://api.spotify.com/v1/artists/' + id + '/top-tracks?country=CA';

  	return this.http.get(url, this.httpOptions)
  		.map(res => res);

  }

  authAccount(){
  	let url = 'https://accounts.spotify.com/authorize?client_id=8675db4b14744bf7947e23ce79bafd6d&redirect_uri=http://localhost:4200&scope=user-read-private%20user-read-email&response_type=token&state=123';

  	return this.http.get(url)
  		.subscribe(res => console.log(res));
  }
}
