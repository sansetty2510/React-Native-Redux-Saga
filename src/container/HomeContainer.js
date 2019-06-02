import { connect } from 'react-redux';
import { getGithubUsers } from '../pages/Home/actions';
import Home from '../pages/Home/component/home'

const mapActionToProps = {
	getGithubUsers
}
const mapStateToProps = state => ({
	userList: state.homeReducer.userList,
});
export default connect(mapStateToProps, mapActionToProps)(Home);
