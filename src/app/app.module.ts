import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpModule} from '@angular/http';
import { MyApp } from './app.component';

import { PrincipalPage } from '../pages/principal/principal';
import { ServicoopcaoPage } from '../pages/servicoopcao/servicoopcao';
import { MenuservicoPage } from '../pages/menuservico/menuservico';
import { LocalizacaoPage } from '../pages/localizacao/localizacao';
import { MenuinformacoesPage } from '../pages/menuinformacoes/menuinformacoes';
import { AcompanhamentoPage } from '../pages/acompanhamento/acompanhamento';
import { TelefonesuteisPage } from '../pages/telefonesuteis/telefonesuteis';
import { EnvioPage } from '../pages/envio/envio';
import { TurismoPage } from '../pages/turismo/turismo';
import { LocalProvider } from '../providers/local/local';
import { LocalgooglePage } from "../pages/localgoogle/localgoogle";


@NgModule({
  declarations: [
    MyApp,
    PrincipalPage,
    ServicoopcaoPage,
    MenuservicoPage,
    LocalizacaoPage,
    LocalgooglePage,
    MenuinformacoesPage,
    AcompanhamentoPage,
    TelefonesuteisPage,
    EnvioPage,
    TurismoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PrincipalPage,
    ServicoopcaoPage,
    MenuservicoPage,
    LocalizacaoPage,
    LocalgooglePage,
    MenuinformacoesPage,
    AcompanhamentoPage,
    TelefonesuteisPage,
    EnvioPage,
    TurismoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocalProvider
  ]
})
export class AppModule {}