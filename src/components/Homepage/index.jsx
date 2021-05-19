// import "./style.css"
// export {Homepage} from "./homepage"

import React from 'react';
import './style.css';

import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './homepage';
import Body from '../Body';
import Footer from '../Footer';

const Navbar = () => {
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
    
    <Body />
    <Footer />
	</>
    
    
    
);
};

export default Navbar;
