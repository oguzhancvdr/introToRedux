import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer, initialState} from './context';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Favorites, Restaurants} from './pages';

const Tab = createBottomTabNavigator();
const store = createStore(reducer, initialState);

const Router = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Restaurants"
          screenOptions={({route}) => ({
            tabBarIcon: ({_, color, size}) => {
              let iconName;

              if (route.name === 'Favorites') {
                iconName = 'gratipay';
              } else if (route.name === 'Restaurants') {
                iconName = 'cutlery';
              }

              // You can return any component that you like here!
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen
            name="Favorites"
            component={Favorites}
            options={{title: 'Favorite Places'}}
          />
          <Tab.Screen
            name="Restaurants"
            component={Restaurants}
            options={{title: 'Restaurants'}}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default Router;
