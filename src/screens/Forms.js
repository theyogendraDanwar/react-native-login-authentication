import React, {Component} from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
  ActivityIndicator,
  Image,
  Text,
} from 'react-native';

import UserInput from './components/UserInput';
import ButtonSubmit from './components/ButtonSubmit';
import DefaultText from './components/DefaultText';
// import SignupSection from './SignupSection';


import usernameImg from '../images/username.png';
import passwordImg from '../images/password.png';

export default class Form extends Component {

	state = {
      showPass: true,
      press: false,
    };

    showPass() {
    	this.state.press === false
      ? this.setState({showPass: false, press: true})
      : this.setState({showPass: true, press: false});
    }
	  render() {
    return (
    	<View>
    	<KeyboardAvoidingView behavior="padding">
        <UserInput
          source={usernameImg}
          placeholder={"Username"}
          autoCapitalize={'none'}
          returnKeyType={'next'}
          autoCorrect={false}
          keyboardStyle={'numeric'}
          changeEvent={this.props.changeRequest}
        />
        <UserInput
          source={passwordImg}
          secureTextEntry={this.state.showPass}
          placeholder={"Password"}
          returnKeyType={'go'}
          autoCapitalize={'none'}
          autoCorrect={false}
          passwordField={true}
          changeEvent={this.props.changeRequest}
        />
      	</KeyboardAvoidingView>
        <DefaultText 
        title="Forgot Password"
        align="right"
        mobileWidth={true}
        />
      	<ButtonSubmit submit={this.props.submitRequest}/>
        <DefaultText
        title="SignUp"
        align='center'
        justifyContent="center"
        />
    	</View>
    );
  }
}