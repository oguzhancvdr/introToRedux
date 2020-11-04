import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import Component_A from './pages/Component_A';
import Component_B from './pages/Component_B';
import Component_C from './pages/Component_C';

import {reducer, initialState} from '../src/context';

const store = createStore(reducer, initialState);

const Main = (props) => {
  return (
    // * HOC - High Order Component
    <Provider store={store}>
      <View style={{flex: 1}}>
        <Component_A />
        <Component_B />
        <Component_C />
      </View>
    </Provider>
  );
};

export default Main;
