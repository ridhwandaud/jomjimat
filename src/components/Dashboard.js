import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Content } from 'native-base';
import { TabNavigator } from "react-navigation";
import { NavigationComponent } from 'react-native-material-bottom-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Transactions from './scene/Transactions';
import Budget from './scene/Budget';


const Dashboard = TabNavigator({
  Transactions: { screen: Transactions },
  Budget: { screen: Budget }
}, {
  tabBarComponent: NavigationComponent,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    bottomNavigationOptions: {
      labelColor: 'white',
      rippleColor: 'white',
      tabs: {
        Transactions: {
          barBackgroundColor: '#37474F'
        },
        Budget: {
          barBackgroundColor: '#00796B'
        }
      }
    }
  }
})


export default Dashboard;