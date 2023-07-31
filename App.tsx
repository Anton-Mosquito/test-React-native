import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Details from './src/screens/details/Details';
import createSagaMiddleware from 'redux-saga';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainNews from './src/screens/MainNews';
import MainPage from './src/screens/mainPage/MainPage';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import {RootReducer} from './src/redux/Reducer';
import {sagaObserver} from './src/redux/saga';
import {composeWithDevTools} from 'redux-devtools-extension';
// import Users from './src/screens/Users';
// import Settings from './src/screens/Settings';

const MyFirstStack = createStackNavigator();

const TabNavigator = createBottomTabNavigator();

const saga = createSagaMiddleware();

const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(saga)),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

saga.run(sagaObserver);

const TabPage = () => {
  return (
    <TabNavigator.Navigator>
      <TabNavigator.Screen component={MainPage} name={'MainPage'} />
      <TabNavigator.Screen component={MainNews} name={'MainNews'} />
    </TabNavigator.Navigator>
  );
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyFirstStack.Navigator screenOptions={{headerShown: false}}>
          <MyFirstStack.Screen name={'TabPage'} component={TabPage} />
          <MyFirstStack.Screen component={Details} name={'Details'} />
        </MyFirstStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
