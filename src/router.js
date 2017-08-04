import React from 'react';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import { StackNavigator } from 'react-navigation';

const RouterComponent = StackNavigator({
  LoginForm: { screen: LoginForm },
  Dashboard: { screen: Dashboard },
});

export default RouterComponent;