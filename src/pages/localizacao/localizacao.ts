import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LocalgooglePage } from '../localgoogle/localgoogle';
import { EnvioPage } from '../envio/envio';
import { MenuservicoPage } from '../menuservico/menuservico';

@Component({
  selector: 'page-localizacao',
  templateUrl: 'localizacao.html'
})
export class LocalizacaoPage {

  constructor(public navCtrl: NavController) {
 
  }goToMenuservico(params){
    if (!params) params = {};
    this.navCtrl.push(MenuservicoPage);
  }goToLocalgoogle(params){
    if (!params) params = {};
     this.navCtrl.push(LocalgooglePage);  
  }goToEnvio(params){
    if (!params) params = {};
    this.navCtrl.push(EnvioPage);
  }
}
