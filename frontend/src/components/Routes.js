import React from "react";
import Headers from "./Headers";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Register from "./Register";
import Login from "./Logins";
const Routes = () => {
	return (
		<Router>
			<Headers />
			<main>
				<Switch>
					<Route path='/' exact>
						<Home />
					</Route>
					<Route path='/about'>
						<About />
					</Route>
					<Route path='/users/login'>
						<Login />
					</Route>
					<Route path='/users/register'>
						<Register />
					</Route>
				</Switch>
			</main>
			<Footer />
		</Router>
	);
};

export default Routes;
