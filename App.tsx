import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Details from './src/screens/details/Details';
import createSagaMiddleware from 'redux-saga';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainNews from './src/screens/mainNews/MainNews';
import MainPage from './src/screens/mainPage/MainPage';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import {RootReducer} from './src/redux/Reducer';
import {sagaObserver} from './src/redux/saga';
import {composeWithDevTools} from 'redux-devtools-extension';
// import SplashScreen from 'react-native-splash-screen';
// import {useEffect} from 'react';

const MyFirstStack = createStackNavigator();

const TabNavigator = createBottomTabNavigator();

const saga = createSagaMiddleware();

const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(saga)),
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
  //useEffect(() => SplashScreen.hide(), []);
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
