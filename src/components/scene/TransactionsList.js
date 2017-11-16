import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { View, Text, Modal, TouchableHighlight, FlatList, Platform } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Form, Item, Input, Label, Card, CardItem } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';
import { transactionUpdate, transactionCreate, transactionsFetch } from  '../../actions';
import { Actions } from 'react-native-router-flux';
//import Toast from 'react-native-android-toast';

class TransactionsList extends Component{

  componentWillMount() {
		this.props.transactionsFetch();
		// if(Platform.OS !== 'android')
		// {
		// 	Toast.show('Toast show runs fine', Toast.LONG);
		// }
	}

	render(){
		return(
			<Container>
				<Content style={{flex:1, paddingHorizontal: 10, backgroundColor: '#f8fbfe', paddingTop: 20}}>
					<FlatList
					  data={this.props.transactions}
					  renderItem={
					  	({item}) => 
					  	<Card>
					  		<CardItem>
					  			<View style={{ flexDirection: 'row', justifyContent: 'space-around', }}>
					  				<Text style={{ flex: 1 }}>{item.note}</Text>
					  				<Text style={{ flex: 1 }}>{item.value}</Text>
					  			</View>
					  		</CardItem>	
					  	</Card>}
					/>
	  		</Content>
	  		<ActionButton buttonColor="rgba(60,204,255,1)" onPress={() => Actions.add()}/>
  		</Container>	
		)
	}
}

const styles = {
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
};

const mapStateToProps = (state) => {

	const transactions = _.map(state.transactions, (val, key) => {
		return { ...val, key};
	});

	return { transactions };
};

// export default TransactionsList;
export default connect (mapStateToProps,{ transactionsFetch })(TransactionsList);