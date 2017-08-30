import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { View, Text, Modal, TouchableHighlight, FlatList } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Form, Item, Input, Label, Card, CardItem } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';
import { transactionUpdate, transactionCreate, transactionsFetch } from  '../../actions';
import { Actions } from 'react-native-router-flux';

class TransactionsList extends Component{

	constructor(props) {
    super(props);
    this.state = {isLoading: ''};
  }

  componentWillMount() {
  	this.setState({ isLoading: true });
		this.props.transactionsFetch();
	}

	render(){
		return(
			<View style={{flex:1, paddingHorizontal: 10, backgroundColor: '#ffffff', paddingTop: 20}}>
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
        <ActionButton buttonColor="rgba(0,0,0,1)" onPress={() => Actions.add()}/>
  		</View>	
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