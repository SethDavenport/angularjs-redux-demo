import angular from 'angular';
import 'core-js';
import '@wealthsimple/fabric/scss/fabric.scss';
import ngRedux from 'ng-redux';

import './index.css';
import ConfigureStore, { DevToolsDigestHack } from './configure-store';
import AppComponent from './app';
import WsCounterComponent from './counter';

export default angular.module('ws.redux-demo', [ngRedux])
  .component('app', AppComponent)
  .component('wsCounter', WsCounterComponent)
  .config(ConfigureStore)
  .run(DevToolsDigestHack)
  .name;
