import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuinformacoesPage } from '../menuinformacoes/menuinformacoes';

@Component({
  selector: 'page-telefonesuteis',
  templateUrl: 'telefonesuteis.html'
})
export class TelefonesuteisPage {

  constructor(public navCtrl: NavController) {
  }
  goToMenuinformacoes(params){
    if (!params) params = {};
    this.navCtrl.push(MenuinformacoesPage);

  }
}