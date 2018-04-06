import React, {Component} from 'react';
import {
  StyleSheet,
   Text,
   Dimensions,
   View
 } from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export default class DefaultText extends Component {
  
  componentWillMount() {
    const mobileWidth = this.props.mobileWidth !== undefined ? (DEVICE_WIDTH - 40) : '100%';
    const justify = this.props.justifyContent !== undefined ?  this.props.justifyContent : 'flex-end';
    this.styles = new StyleSheet.create({
      container: {
        width: mobileWidth,
        flexDirection: 'row', 
        justifyContent: justify,
        marginBottom: 10,
        marginTop: 10,
      },
      showpasswordText: { 
        color: 'white',
        fontSize: 15,
      },
    });
  }
	render() {
		return (
			<View style={this.styles.container}>
				<Text
        style={this.styles.showpasswordText}
				textAlign={this.props.align}
				>{this.props.title}</Text>
			</View>
		)
 }
}