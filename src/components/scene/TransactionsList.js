import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Modal, TouchableHighlight, FlatList } from 'react-native';
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
				<FlatList
				  data={[{key: 'a'}, {key: 'b'}]}
				  renderItem={
				  	({item}) => <Text>{item.key}</Text>}
				/>
        <ActionButton buttonColor="rgba(0,0,0,1)" onPress={() => this.setModalVisible(true)} />
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <Container>
	        <Header androidStatusBarColor="#ffffff" style={{ backgroundColor: 'white' }}>
	        	<Left>
	        		<Button transparent onPress={()=>{this.setModalVisible(!this.state.modalVisible)}}>
	          		<Icon name='md-close' style={{fontSize: 25}}/>
	          	</Button>
	          </Left>
	          <Body>
	            <Title style={{ color: 'black'}}>Add</Title>
	          </Body>
	          <Right>
	          	<Button transparent onPress={this.onButtonPress.bind(this)}>
	          		<Text> Save </Text>
	          	</Button>
	          </Right>
	        </Header>
	        <Content>
	          <Form>
	            <Item>
	              <Input
	              	label="Value" 
	              	placeholder="RM 0"
	              	value={this.props.value}
	              	onChangeText={value => this.props.transactionUpdate({ prop: 'value', value })} 
	              />
	            </Item>
	            <Item>
	              <Input
	              	label="Note"  
	              	placeholder="Note"
	              	value={this.props.note}
	              	onChangeText={value => this.props.transactionUpdate({ prop: 'note', value })}  
	              />
	            </Item>
	            <Item last>
	              <Input
	              	label="Date"  
	              	placeholder="Date"
	              	value={this.props.date}
	              	onChangeText={value => this.props.transactionUpdate({ prop: 'date', value })} 
	              />
	            </Item>
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