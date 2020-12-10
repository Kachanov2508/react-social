import React, { Component } from 'react'
import Profile from './Profile'
import { getUserProfile } from "../../redux/profile-reducer";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import withAuthRedirect from "../../hoc/withAuthRedirect"



export class ProfileContainer extends Component {

	componentDidMount() {
		let userId = this.props.match.params.userId
		if (!userId) userId = 2
		this.props.getUserProfile(userId)
	}

	render() {



		return (
			<Profile {...this.props} profile={this.props.profile} />
		)
	}
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

const mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		isAuth: state.auth.isAuth
	}
}

const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent)