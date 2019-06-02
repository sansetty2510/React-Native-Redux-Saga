import * as React from 'react';
import { createDrawerNavigator, DrawerItems, createAppContainer } from "react-navigation";
import { ScrollView,SafeAreaView, View } from 'react-native';
import Home from './container/HomeContainer';

const customDrawerNavigation = (props) => (
	<SafeAreaView style={{flex : 1}}>
	<View style={{height : 150, backgroundColor : 'red' }} ></View>
		<ScrollView>
			<DrawerItems {...props} />
		</ScrollView>
	</SafeAreaView>
)

const Main = createDrawerNavigator(
	{
		HomeScreen: {screen: Home},
	},
	{
		initialRouteName: "HomeScreen",
		headerMode: 'float',
		contentComponent: customDrawerNavigation
  	}
);

const App = createAppContainer(Main);

export default App;