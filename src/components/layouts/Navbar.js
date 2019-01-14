import React from "react";
import { Link } from "react-router-dom";
import SignedinLinks from "./SignedinLinks";
import SignedoutLinks from "./signedoutLinks";
import { connect } from "react-redux";

const NavBar = props => {
  const { auth, profile } = props;
  // console.log("profile is",profile)
  const links = auth.uid ? (
    <SignedinLinks profile={profile} />
  ) : (
    <SignedoutLinks />
  );
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo left">
          chat screen
        </Link>
        {links}
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(NavBar);
