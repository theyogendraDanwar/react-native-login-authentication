import React, {Component} from 'react';

import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Animated,
  Image,
  Dimensions,
  View,
} from 'react-native';


const MARGIN = 40;

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export default class ButtonSubmit extends Component {
   render() {
    return (
      <View style={styles.container}>
        <Animated.View style={styles.buttoncontainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.props.submit}
            activeOpacity={1}>
              <Text style={styles.text}>LOGIN</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    );

   }
};

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',  
  },
  buttoncontainer: {
    width: (DEVICE_WIDTH - 40),
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    height: MARGIN,
    borderRadius: 20,
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  }
});