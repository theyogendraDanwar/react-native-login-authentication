import React , {Component} from 'react';
import { 
	View, 
	Text, 
	ImageBackground,
	Image,
	StyleSheet,
	Animated,
	Easing
} from 'react-native';

import Logo from './Logo';
import Form from './Forms';

import LogoImg from '../images/logo.png';
import backgroundImage from '../images/background.jpg';
import spinner from '../images/loading.gif';

import Quotes  from '../quotes'

export default class LoginScreen extends Component {
	state = {
		quotesState: Quotes[Math.floor(Math.random() * Quotes.length -1 ) + 1 ].text,
		flexAnimation: new Animated.Value(1),
		loading: 0,
		userstate: '',
		passstate: ''
	}

	onAfterLoad = () => {
		let random = Math.floor(Math.random() * Quotes.length -1 ) + 1 
		this.setState({
			quotesState : Quotes[random].text
    });
	}

	componentDidMount() {
		setInterval(this.onAfterLoad,10000);
}

	componentWillUnmount() {
		clearInterval(this.onAfterLoad);
	}

	submitTimeInterval = () => {
		this.setState({
			loading: 0,
		});
	}

	submitHandler = () => {
		Animated.timing (this.state.flexAnimation, {
			toValue: 0,
			easing: Easing.bounce,
			duration: 300,
			useNativeDriver: true,
		}).start(()=>{
			this.setState({
				loading: 1
			})
			setTimeout(this.submitTimeInterval, 3000);
		});
	};

	changeHandler = (value, id) => {
		console.log(id, value);
	}

	render() {

		let loadanimation = null;
		if(this.state.loading) {
			 loadanimation = (
			 	<View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
			 	<Image 
			 	source={spinner} 
			 	style={{width: 80, height: 70}}/>
			 	</View>
			);
		} else {
			loadanimation = (
				<Animated.View style={{
					opacity: this.state.flexAnimation,
					transform:[{
						scale: this.state.flexAnimation
					}],
					justifyContent: 'center',
					flex: 1,
				}}>
				<Form submitRequest={this.submitHandler} changeRequest={this.changeHandler}/> 
				</Animated.View>
				)
		}
		return (
			<ImageBackground style={{width: '100%', height: '100%'}} source={ backgroundImage }>
			<View style={styles.container}>
				<View style={styles.firstBlock}>
					<Logo logoImg = { LogoImg }/>
					<Text textAlign ='justify'
					 style={styles.quotesstyle}
					 >{this.state.quotesState}</Text>
				</View>
				{loadanimation}
			</View>
			</ImageBackground>
		)
	}
};


const styles = StyleSheet.create({
	container: {
		flex: 1,
		width:'100%',
		paddingTop: 10,
	},
	firstBlock: {
		flex: 1,
		alignItems: 'center', 
	},
	quotesstyle: {
		marginTop: 20,
		color: '#fff',
		fontSize: 20,
		margin: 10,
	}
	
})