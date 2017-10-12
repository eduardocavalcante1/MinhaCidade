import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MenuinformacoesPage } from '../menuinformacoes/menuinformacoes';

@Component({
  selector: 'page-turismo',
  templateUrl: 'turismo.html'
})
export class TurismoPage {

  constructor(public navCtrl: NavController) {
 
  }goToMenuinformacoes(params){
    if (!params) params = {};
    this.navCtrl.push(MenuinformacoesPage);
  }
}