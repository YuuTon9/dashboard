import React from 'react'
import { Link } from 'react-router-dom'
import Posting from './Posting'
import SignedOut from './SignedOut'
import { connect } from 'react-redux'

const Navbar = (props) => {
    const { auth, profile } = props;
    const links = auth.uid ? <Posting profile={profile}/>: <SignedOut />
    return (
        <nav className="nav-wrapper pink darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Dashboard</Link>
                { links }
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}
export default connect(mapStateToProps)(Navbar)