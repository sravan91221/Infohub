import React from 'react';
// import './App.css';
import Homepage from './components/Homepage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Home from './pages';
import Material from './pages/Material';
import Videos from './pages/Videos';
import ClassRecordings from './pages/ClassRecordings';
import Papers from './pages/Papers';
import Blog from './pages/Blog';
import Intern_Portal from './pages/Intern_Portal';
import App1 from './LoginMain';
import Profile from './pages/Profile';
import Form from './pages/Form';
import QForm from './pages/Qform';

function App() {
return (
	<Router>
    
	{/* <Homepage /> */}

	<Switch>
		<Route path='/home' component={Homepage} />
    <Route path='/Profile' component={Profile} />
	<Route path='/qform' component={QForm} />
	<Route path='/form' component={Form} />
    <Route path='/login' component={App1} />

		<Route path='/Material' component={Material} />
		<Route path='/Videos' component={Videos} />
		<Route path='/ClassRecordings' component={ClassRecordings} />
		<Route path='/Papers' component={Papers} />
		<Route path='/Blog' component={Blog} />
		<Route path='/Intern_Portal' component={Intern_Portal} />
	</Switch>
	</Router>
);
}

export default App;
