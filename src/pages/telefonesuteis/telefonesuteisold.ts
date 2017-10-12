import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServicoopcaoPage } from '../servicoopcao/servicoopcao';
import { LocalizacaoPage } from '../localizacao/localizacao';
import { EnvioPage } from '../envio/envio';
import { MenuservicoPage } from '../menuservico/menuservico';
import { PrincipalPage } from '../principal/principal';
import { MenuinformacoesPage } from '../menuinformacoes/menuinformacoes';
//import { TelefonesuteisPage } from '../telefonesuteis/telefonesuteis';
import { TurismoPage } from '../turismo/turismo';
import { AcompanhamentoPage } from '../acompanhamento/acompanhamento';


@Component({
  selector: 'page-telefonesuteis',
  templateUrl: 'telefonesuteis.html'
})
export class TelefonesuteisPage {

  constructor(public navCtrl: NavController) {
  }
  goToServicoopcao(params){
    if (!params) params = {};
    this.navCtrl.push(ServicoopcaoPage);
  }goToMenuservico(params){
    if (!params) params = {};
    this.navCtrl.push(MenuservicoPage);
  }goToLocalizacao(params){
    if (!params) params = {};
    this.navCtrl.push(LocalizacaoPage);
  }goToEnvio(params){
    if (!params) params = {};
    this.navCtrl.push(EnvioPage);
  }goToPrincipal(params){
    if (!params) params = {};
    this.navCtrl.push(PrincipalPage);
  }goToMenuinformacoes(params){
    if (!params) params = {};
    this.navCtrl.push(MenuinformacoesPage);
  }goToTurismo(params){
    if (!params) params = {};
    this.navCtrl.push(TurismoPage);
    this.navCtrl.push(ServicoopcaoPage);
  }goToAcompanhamento(params){
    if (!params) params = {};
    this.navCtrl.push(AcompanhamentoPage);
  }goToTelefonesuteis(params){
    if (!params) params = {};
    this.navCtrl.push(TelefonesuteisPage);
  }
}