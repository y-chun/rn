/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './app/store/index';
import rootSaga from './app/sagas/index';
// import App from './containers/app';
import {Actions,Router,Scene,} from 'react-native-router-flux';
import Root from './app/pages/root';
// import Square from './app/pages/square';
// import Release from './app/pages/release';
// const scenes = Actions.create(
//   <Scene key="root" hideNavBar={true}>
//     <Scene key="Square" title="Square" component={Square} initial={true} />
//     <Scene key="Release" title="Release" component={Release}/>
//   </Scene>
// );
const store = configureStore();

store.runSaga(rootSaga);

const App = () => (
   <Provider store={store}>
      <Root/>
    </Provider>
);

export default App;
