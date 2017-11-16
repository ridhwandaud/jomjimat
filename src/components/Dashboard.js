import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Content } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TransactionsList from './scene/TransactionsList';
import Budget from './scene/Budget';

class Dashboard extends Component{
  render(){
    return(
      <View style={{flex: 1}}>
        <TransactionsList />
      </View>
    )
  }
}


export default Dashboard;