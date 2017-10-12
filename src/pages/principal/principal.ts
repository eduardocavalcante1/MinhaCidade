import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServicoopcaoPage } from '../servicoopcao/servicoopcao';
import { MenuinformacoesPage } from '../menuinformacoes/menuinformacoes';

@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html'
})
export class PrincipalPage {

  constructor(public navCtrl: NavController) {

  } goToServicoopcao(params) {
    if (!params) params = {};
    this.navCtrl.push(ServicoopcaoPage);
  } goToMenuinformacoes(params) {
    if (!params) params = {};
    this.navCtrl.push(MenuinformacoesPage);
  }
}