import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Details from './src/screens/details/Details';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Users from './src/screens/Users';
import Settings from './src/screens/Settings';
import MainPage from './src/screens/mainPage/MainPage';

const MyFirstStack = createStackNavigator();

const TabNavigator = createBottomTabNavigator();

const TabPage = () => {
  return (
    <TabNavigator.Navigator>
      <TabNavigator.Screen component={MainPage} name={'MainPage'} />
      <TabNavigator.Screen component={Settings} name={'Settings'} />
      <TabNavigator.Screen component={Users} name={'Users'} />
    </TabNavigator.Navigator>
  );
};

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <MyFirstStack.Navigator screenOptions={{headerShown: false}}>
        <MyFirstStack.Screen name={'TabPage'} component={TabPage} />
        <MyFirstStack.Screen component={Details} name={'Details'} />
      </MyFirstStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
