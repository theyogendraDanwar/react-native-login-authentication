import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';


export default class Logo extends Component { 

	render() {
		return (
			<View style={styles.container}>
			<Image source={this.props.logoImg} style={styles.image} />
      </View>
		);
	}

}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 10,
  },
  image: {
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginTop: 20,
  },
});