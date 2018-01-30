import { rootReducer } from './store';

ConfigureStore.$inject = ['$ngReduxProvider'];
export default function ConfigureStore($ngReduxProvider) {
  const enhancers = window.__REDUX_DEVTOOLS_EXTENSION__ ?
    [window.__REDUX_DEVTOOLS_EXTENSION__()] :
    [];

  $ngReduxProvider.createStoreWith(rootReducer, [], enhancers);
}

DevToolsDigestHack.$inject = ['$ngRedux', '$rootScope', '$timeout'];
export function DevToolsDigestHack($ngRedux, $rootScope, $timeout) {
  $ngRedux.subscribe(() => {
    $timeout(() => $rootScope.$apply(() => {}), 0);
  });
}
