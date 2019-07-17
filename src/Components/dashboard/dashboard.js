import React, { Component } from 'react'
import Notifications from './Notifications'
import PostList from '../projects/postlist'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { auth } from 'firebase';
import { Redirect } from 'react-router-dom'
class Dashboard extends Component {
    render() {
        const { projects, auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                    <PostList projects={projects}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>   
                </div>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    console.log(state);
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth
    }
}
export default compose(
    connect(mapStatetoProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(Dashboard)