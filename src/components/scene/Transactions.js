import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { transactionCreate } from  '../actions';
import { Card, CardSection, Input, Button } from './common';

class Transactions extends Component{
	static navigationOptions = {
    title: 'Transactions',
    tabBarLabel: 'Transactions',
    tabBarIcon: () => (<Icon size={24} color="white" name="add-shopping-cart" />)
  }

  onButtonPress() {
		const { value, note, date } = this.props;

		this.props.transactionCreate( { value, note, date });
	}

	render(){
		return(
			<Card>
				<CardSection>
					<Input
						label="Value"
						placholder="RM 0"
						value={this.props.value}
						onChangeText={value => this.props.transactionUpdate({ prop: 'value', value })}
					/>	
				</CardSection>

				<CardSection>
					<Input
						label="Phone"
						placholder="555-555-555"
						value={this.props.note}
						onChangeText={value => this.props.transactionUpdate({ prop: 'note', value })}
					/>	
				</CardSection>

				<CardSection style={{ flexDirection: 'column' }}>
					<Input
						label="Date"
						placholder="01-09-2017"
						value={this.props.date}
						onChangeText={value => this.props.transactionUpdate({ prop: 'date', value })}
					/>	
				</CardSection>			
				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>
						Create
					</Button>	
				</CardSection>
			</Card>	
		)
	}
}

const mapStateToProps = (state) => {
	const { value, note, date } = state.transactionForm;
	return { value, note, date };
};

export default connect (mapStateToProps,{ transactionUpdate, transactionCreate })(Transactions);