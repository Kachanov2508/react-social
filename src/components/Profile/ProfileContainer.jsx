import React, { Component } from 'react'
import Profile from './Profile'
import { getUserProfile, getStatus, updateStatus } from "../../redux/profile-reducer";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import withAuthRedirect from "../../hoc/withAuthRedirect"



export class ProfileContainer extends Component {

	componentDidMount() {
		let userId = this.props.match.params.userId
		if (!userId) userId = this.props.authorizedUserId;
		this.props.getUserProfile(userId)
		this.props.getStatus(userId)
	}

	render() {



		return (
			<Profile {...this.props}
			profile={this.props.profile}
						status={this.props.status}
						updateStatus={this.props.updateStatus} />
		)
	}
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

const mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		isAuth: state.auth.isAuth,
		status: state.profilePage.status,
		authorizedUserId: state.auth.userId,
		// isAuth: state.auth.isAuth 
	}
}

const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, { getUserProfile, getStatus, updateStatus })(WithUrlDataContainerComponent)