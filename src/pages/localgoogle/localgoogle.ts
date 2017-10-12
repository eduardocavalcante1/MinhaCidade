import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { LocalizacaoPage } from '../localizacao/localizacao';
import { Geolocation } from '@ionic-native/geolocation';

declare var google: any;
declare var ready: any;

@IonicPage()
@Component({
  selector: 'page-localgoogle',
  templateUrl: 'localgoogle.html',
})
export class LocalgooglePage {


  constructor(public navCtrl: NavController, public navParams: NavParams, plataform: Platform) {

    plataform.ready().then(() => {
      this.initPage();
      
    });

  } goToLocalizacao(params) {
    if (!params) params = {};
    this.navCtrl.push(LocalizacaoPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocalgooglePage');

  }

  private initPage() {
    alert("cheguei aqui");

    let geolocation: Geolocation;
    geolocation.getCurrentPosition().then(result => {
      this.loadMap(result.coords.latitude, result.coords.longitude);

    });
  }


  private getendereco(latLng, successCallback) {
    let geocoder = new google.maps.Geocoder;
    geocoder.geocode({ location: latLng }, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK) {
        if (results[0]) {
          successCallback(results[0].formatted_address);

        }

      }

    });


  }

  private loadMap(lat, lng) {
    let latLng = new google.maps.LatLng(lat, lng);
    let mapOptions = {
      center: latLng,
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true
    };
    let element = document.getElementById('mapa');
    let map = new google.maps.Map(element, mapOptions);

    let marker = new google.maps.Marker({
      position: latLng
    });
    marker.setMap(map);

    this.getendereco(latLng, address => {
      alert(address);

    });
  }

}


