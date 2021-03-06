import React from 'react';
  

import '../components/Homepage/style.css';

import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from '../components/Homepage/homepage.jsx';
import Card from './Card';
import Filter from './Filter';

const Material = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
            <h1 style={{
                color:'white',
                fontSize:'35px',
                // display: 'flex',
                textAlign:'center',
                marginLeft:'0%',
                 marginTop:'1.5em',                
                padding: '0 1rem',
                height: '100%'
                }}>Infohub</h1>
		<NavLink to='/Material' activeStyle>
			Materials
		</NavLink>
		<NavLink to='/Videos' activeStyle>
			Videos
		</NavLink>
		<NavLink to='/ClassRecordings' activeStyle>
			Class Recordings
		</NavLink>
		<NavLink to='/Papers' activeStyle>
			Question Papers
		</NavLink>
		<NavLink to='/Blog' activeStyle>
			Blogs
		</NavLink>
		<NavLink to='/Intern_Portal' activeStyle>
			Internship Portal
		</NavLink>
        {/* <NavLink to='/' activeStyle>
			Forum
		</NavLink> */}
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/signin'>Log out</NavBtnLink>
		</NavBtn>
	</Nav>
    <br />
    
      <Filter />
      <div className="container">
      <div className="row" >   
      <div className="col-md-3"></div>   
     <Card /><Card /><Card />
    </div>

    <div className="row my-5" >  
    <div className="col-md-3"></div>     
     <Card /><Card /><Card />
    </div>
      </div>
    
    
    
	</>
    
    
    
);
};


export default Material;