import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';
import { MenuservicoPage } from '../menuservico/menuservico';
import { AcompanhamentoPage } from '../acompanhamento/acompanhamento';


@Component({
  selector: 'page-servicoopcao',
  templateUrl: 'servicoopcao.html'
})
export class ServicoopcaoPage {

  constructor(public navCtrl: NavController) {

 }goToPrincipal(params){
    if (!params) params = {};
    this.navCtrl.push(PrincipalPage);
  }goToMenuservico(params){
    if (!params) params = {};
    this.navCtrl.push(MenuservicoPage);   
  }goToAcompanhamento(params){
    if (!params) params = {};
    this.navCtrl.push(AcompanhamentoPage);
  }
}