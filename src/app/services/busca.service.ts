import { Estabelecimento } from './../models/estabelecimento.model';
import { Coordenada } from './../models/coordenada.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const apiEstabelecimentoURL = "https://api.openbrewerydb.org/breweries";
const apiCoordenadaURL = "http://www.geoplugin.net/json.gp?ip=";
const apiIpAdreesUrl = "http://api.ipify.org/?format=json";


@Injectable()
export class BuscaService {



  constructor(private http:HttpClient) { }

  getIp(){
    return this.http.get<Ip>(apiIpAdreesUrl);
  }

  getEstablishment(): Observable<Estabelecimento> {
    return this.http.get<Estabelecimento>(apiEstabelecimentoURL);
  }

  getCoordinates(ip: string): Observable<Coordenada>{
    console.log(apiCoordenadaURL + ip);

    return this.http.get<Coordenada>(apiCoordenadaURL + ip);
  }

  getKm(myCoordinates: Coordenada, searchCordinates: Estabelecimento[]){

      searchCordinates.map(item => {

        console.log(this.convertCordinatesInKm(myCoordinates, item));
      });
  }

  convertCordinatesInKm(myCoordinates: Coordenada, searchCordinates: Estabelecimento){

    var earthRadius = 6371 // Radius of the earth in km
    var dLat = this.deg2rad(searchCordinates.latitude - myCoordinates.geoplugin_latitude);
    var dLon = this.deg2rad(searchCordinates.longitude - myCoordinates.geoplugin_longitude);

    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(this.deg2rad(myCoordinates.geoplugin_latitude)) *
    Math.cos(this.deg2rad(searchCordinates.latitude)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);

    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var dist = earthRadius * c; // Distance in km

    return dist.toFixed(2);
  }

  deg2rad(deg: number) {return deg * (Math.PI / 180)}
}


export interface Ip{ip: string;}
