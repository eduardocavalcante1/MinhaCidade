import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PrincipalPage } from '../principal/principal';
import { TelefonesuteisPage } from '../telefonesuteis/telefonesuteis';
import { TurismoPage } from '../turismo/turismo';

@Component({
  selector: 'page-menuinformacoes',
  templateUrl: 'menuinformacoes.html'
})
export class MenuinformacoesPage {

  constructor(public navCtrl: NavController) {
  }goToPrincipal(params){
    if (!params) params = {};
    this.navCtrl.push(PrincipalPage);
  }goToMenuinformacoes(params){
    if (!params) params = {};
    this.navCtrl.push(MenuinformacoesPage);
  }goToTurismo(params){
    if (!params) params = {};
    this.navCtrl.push(TurismoPage);
   // this.navCtrl.push(ServicoopcaoPage);
  }goToTelefonesuteis(params){
    if (!params) params = {};
    this.navCtrl.push(TelefonesuteisPage);
  }
}
