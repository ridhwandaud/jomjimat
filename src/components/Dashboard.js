import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Content } from 'native-base';
import { TabNavigator } from "react-navigation";
import { NavigationComponent } from 'react-native-material-bottom-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TransactionsList from './scene/TransactionsList';
import Budget from './scene/Budget';


const Dashboard = TabNavigator({
  TransactionsList: { screen: TransactionsList },
  Budget: { screen: Budget }
}, {
  tabBarComponent: NavigationComponent,
  animationEnabled: false,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    bottomNavigationOptions: {
      labelColor: 'white',
      rippleColor: 'white',
      tabs: {
        TransactionsList: {
          barBackgroundColor: '#000000'
        },
        Budget: {
          barBackgroundColor: '#000000'
        }
      }
    }
  }
})


export default Dashboard;