import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import HelloWorld from './HelloWorld';


const Header = () => {
	return(
			<div className="header">
			 <Router>
				<div>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/helloworld">Helloworld Page</Link>
					</li>
				</ul>
				<hr />
				<Switch>
					<Route exact path="/"  />
					<Route path="/helloworld" component={HelloWorld} />
				</Switch>
				</div>
			</Router>	
			
		</div>
	);
}

export default Header