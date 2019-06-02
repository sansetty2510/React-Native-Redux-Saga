import * as React from 'react';
import {Text , ScrollView, View, Image, FlatList, StatusBar } from 'react-native';
const height = StatusBar.currentHeight

class Home extends React.Component {
	static navigationOptions = {
		drawerLabel: 'Home',
	};
	constructor(props) {
		super(props);
		this.state = {}
		this.renderList = this.renderList.bind(this)
	}
	componentDidMount() {
		this.props.getGithubUsers()
	}
	renderList({item}) {
		return(<View>
			<Image
				style={{width: 250, height: 250, margin : 10}}
				source={{uri: item.avatar_url}}
			/>
			<Text style={{color: 'white', margin : 10}}>{item.login}</Text>
		</View>)
	}

	render() {
		return(
			<View style={{ backgroundColor: 'rgba(47, 103, 207,.6)', flex: 1 }}>
				<View style={{ height }} />
				<ScrollView>
					<FlatList
						data={this.props.userList}
						renderItem={this.renderList}
						keyExtractor={(list) => `${list.id}`}
					/>
				</ScrollView>
			</View>
		)
	}
}

export default Home;
