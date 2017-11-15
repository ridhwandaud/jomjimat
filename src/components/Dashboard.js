import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Content } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TransactionsList from './scene/TransactionsList';
import Budget from './scene/Budget';
import Boilerplate from 'react-native-android-toast'


class Dashboard extends Component{

	componentWillMount(){
		Boilerplate.show('Boilerplate runs fine', Boilerplate.LONG);
	}

  render(){
    return(
      <View style={{flex: 1}}>
        <TransactionsList />
      </View>
    )
  }
}


export default Dashboard;