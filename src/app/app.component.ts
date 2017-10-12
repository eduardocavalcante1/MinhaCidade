import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { HomePage } from '../pages/home/home';
import { PrincipalPage } from '../pages/principal/principal';
//import { ServicoopcaoPage } from '../pages/servicoopcao/servicoopcao';
//import { MenuservicoPage } from '../pages/menuservico/menuservico';
//import { LocalizacaoPage } from '../pages/localizacao/localizacao' ;
//import { EnvioPage } from '../pages/envio/envio' ;
//import { AcompanhamentoPage } from '../pages/acompanhamento/acompanhamento';
//import { MenuinformacoesPage } from '../pages/menuinformacoes/menuinformacoes';
//import { TelefonesuteisPage } from '../pages/telefonesuteis/telefonesuteis';
//import { TurismoPage } from '../pages/turismo/turismo';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
   rootPage:any = PrincipalPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

