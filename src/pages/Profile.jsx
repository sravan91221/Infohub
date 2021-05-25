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
import Picture from './Picture';
import Upload from './sample';


const Profile = () => {
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
    <div className="container">
        <div className="row">
        <div className="pic col-md-3" >
         <Upload />
        </div>
        <div className="box1 offset-1 col-md-6" style={{borderRadius:"10px",borderStyle:"groove"}}>
            
        </div>

        </div>
        <br />
        <div className="recent col-md-10 " style={{borderStyle:"groove",borderRadius:"10px", height:"120px"}}>
        
        </div>        <br />
        <div className="rebtn">
        <button type="button" class="btn  btn-outline-primary">Recent activity</button>
        </div>
     </div>
	</>
    
);
};


export default Profile;