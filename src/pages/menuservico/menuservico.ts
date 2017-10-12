import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EnvioPage } from '../envio/envio';

import { ServicoopcaoPage } from '../servicoopcao/servicoopcao';
import { LocalizacaoPage } from '../localizacao/localizacao';

@Component({
  selector: 'page-menuservico',
  templateUrl: 'menuservico.html'
})
export class MenuservicoPage {

  constructor(public navCtrl: NavController) {

  } goToLocalizacao(params) {
    if (!params) params = {};
    this.navCtrl.push(LocalizacaoPage);
  } goToServicoopcao(params) {
    if (!params) params = {};
    this.navCtrl.push(ServicoopcaoPage);
  }
}