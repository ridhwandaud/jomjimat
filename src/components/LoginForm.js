import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Button, Spinner } from './common';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';

class LoginForm extends Component {


  componentWillMount(){
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        Actions.dashboard({type: 'reset'});
      } 
     });
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }
  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });

  }

  renderButton(){
    if(this.props.loading){
        return <Spinner size="large" />
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
      );
  }

  render() {
    return (
      <Content style={{ backgroundColor: 'white'}}>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
            label="Email"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input
            label="Email"
            secureTextEntry
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
          </Item>

          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>

          <CardSection>
            {this.renderButton()}
          </CardSection>
        </Form>
      </Content>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};
const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);