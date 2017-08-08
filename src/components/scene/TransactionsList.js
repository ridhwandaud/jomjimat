import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Modal, TouchableHighlight } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Form, Item } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';
import { Input } from '../common';
import { transactionUpdate, transactionCreate} from  '../../actions';

class TransactionsList extends Component{
	static navigationOptions = {
    title: 'Transactions',
    tabBarLabel: 'Transactions',
    tabBarIcon: () => (<Icon size={24} color="white" name="md-add" />)
  }

  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  onButtonPress() {
		const { value, note, date } = this.props;

		this.props.transactionCreate( { value, note, date });

		this.setModalVisible(!this.state.modalVisible)
	}


	render(){
		return(
			<View style={{flex:1, backgroundColor: '#f3f3f3'}}>
        <ActionButton buttonColor="rgba(231,76,60,1)" onPress={() => this.setModalVisible(true)} />
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <Container>
	        <Header androidStatusBarColor="#ffffff">
	        	<Left>
	        		<Button transparent onPress={()=>{this.setModalVisible(!this.state.modalVisible)}}>
	          		<Icon name='md-close' style={{fontSize: 25}}/>
	          	</Button>
	          </Left>
	          <Body>
	            <Title>Add</Title>
	          </Body>
	          <Right />
	        </Header>
	        <Content>
	          <Form>
	            <Item>
	              <Input 
	              	placeholder="RM 0"
	              	value={this.props.value}
	              	onChangeText={value => this.props.transactionUpdate({ prop: 'value', value })} 
	              />
	            </Item>
	            <Item>
	              <Input 
	              	placeholder="Note"
	              	value={this.props.note}
	              	onChangeText={value => this.props.transactionUpdate({ prop: 'note', value })}  
	              />
	            </Item>
	            <Item last>
	              <Input 
	              	placeholder="Date"
	              	value={this.props.date}
	              	onChangeText={value => this.props.transactionUpdate({ prop: 'date', value })} 
	              />
	            </Item>
	            <Button block success onPress={this.onButtonPress.bind(this)}>
	          		<Text>Add</Text>
	          	</Button>
	          </Form>
	        </Content>
		     </Container>
        </Modal>
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
	const { value, note, date } = state.transactionForm;
	return { value, note, date };
};

// export default TransactionsList;
export default connect (mapStateToProps,{ transactionUpdate, transactionCreate })(TransactionsList);