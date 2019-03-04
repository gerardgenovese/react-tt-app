import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../redux/actions/auth";

export const Header = ({ startLogout }) => {
	return (
		<header>
			<h1>Expensify App</h1>
			<NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
			<NavLink to="/create" activeClassName="is-active">Create</NavLink>
			<NavLink to="/help" activeClassName="is-active">Help</NavLink>
			<button onClick={startLogout}>Logout</button>
		</header>
	)
}

const mapDispatchToProps = (dispatch) => ({
	startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);