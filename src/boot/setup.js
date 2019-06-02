import * as Expo from 'expo';
import * as React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import configureStore from './configureStore';
import App from '../App';

export default class Setup extends React.Component {
	constructor() {
		super();
		this.state = {
			isLoading: false,
			store: configureStore(() => this.setState({ isLoading: false })),
			isReady: false,
		};
	}
	componentWillMount() {
		this.loadFonts();
	}
	async loadFonts() {
		await Expo.Font.loadAsync({
			Roboto: require('native-base/Fonts/Roboto.ttf'),
			Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
			Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf'),
		});

		this.setState({ isReady: true });
	}

	render() {
		if (!this.state.isReady || this.state.isLoading) {
			return <Expo.AppLoading />;
		}
		return (
				<Provider store={this.state.store}>
					<StatusBar backgroundColor="blue" barStyle="light-content" />
					<App />
				</Provider>
		);
	}
}
