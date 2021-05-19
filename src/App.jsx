// import { render } from "@testing-library/react";
// import React from "react";

// import './App.css';

//import {Admin_Login, Login} from "./components/login/index"
// import {Homepage} from "./components/Homepage/index.jsx"

/*class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true
    };
  }

  componentDidMount() {
    //Add .right by default
    this.rightSide.classList.add("right");
  }

  changeState() {
    const { isLogginActive } = this.state;

    if (isLogginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
  }

  render() {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Admin_Login" : "Login";
    const currentActive = isLogginActive ? "login" : "admin_login";
    return (
      <div className="App">
        <div className="login">
          <div className="container" ref={ref => (this.container = ref)}>
            {isLogginActive && (
              <Login containerRef={ref => (this.current = ref)} />
            )}
            {!isLogginActive && (
              <Admin_Login containerRef={ref => (this.current = ref)} />
            )}
          </div>
          <RightSide
            current={current}
            currentActive={currentActive}
            containerRef={ref => (this.rightSide = ref)}
            onClick={this.changeState.bind(this)}
          />
        </div>
      </div>
    );
  }
}

const RightSide = props => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};*/
// class App extends React.Component{
//   render()
//   {
//     return (
//     <Homepage />
//     )
//   }
// }


// export default App;



import React from 'react';
import './App.css';
import Homepage from './components/Homepage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Home from './pages';
import Material from './pages/Material';
import Videos from './pages/Videos';
import ClassRecordings from './pages/ClassRecordings';
import Papers from './pages/Papers';
import Blog from './pages/Blog';
import Intern_Portal from './pages/Intern_Portal';

function App() {
return (
	<Router>
	<Homepage />
	<Switch>
		{/* <Route path='/' exact component={Home} /> */}
    
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
