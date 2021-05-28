import React from 'react';
  

import '../components/Homepage/style.css';
import './formstyle.css';

import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from '../components/Homepage/homepage.jsx';


const QForm = () => {
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
    <div class="page__content-container"  >
        <div class="container register">
            <div class="row">
                <div class="col-md-3 register-left">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                        <h3>WELCOME</h3>
                        <p>Help the community Grow with community</p>
                    
                    </div>
                    <div class="col-md-9 register-right">
                       
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 class="register-heading">Upload a question paper</h3>
                                <div class="row register-form">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" name="eventx" class="form-control" placeholder="Subject Name*" value="" />
                                        </div>
                                        
                                        <div class="form-group" style={{width:"85%"}}>
                                        <select id="s1"  class="filter">
                                        <option value="" disabled selected>Exam type</option>
                                            <option value="1">Minor</option>
                                            <option value="2">Mid-Sem</option>
                                            <option value="3">End-Sem</option>
                                            <option value="3">LabExam</option>  
                                            <option value="3">External-Exams</option>                                         
                                            </select>
                                        </div>
                                      <br />
                                        <div class="form-group" style={{width:"85%"}}>
                                        <select id="s1"  class="filter">
                                        <option value="" disabled selected>Year</option>
                                            <option value="1">Ist year</option>
                                            <option value="2">IInd year</option>
                                            <option value="3">IIIrd year</option>
                                            <option value="4">IVth year</option>
                                            </select>
                                        </div><br />
                                        <div class="form-group "style={{width:"85%"}} >
                                          <select id="s"   class="filter" >
                                          <option value="" disabled selected>Branch</option>
                                            <option value="CSE">CSE</option>
                                            <option value="ECE">ECE</option>
                                            <option value="EEE">EEE</option>
                                            <option value="mech">MECH</option>
                                            <option value="chem">chem</option>
                                            <option value="civil">civil</option>
                                            <option value="Biotech">Biotech</option>
                                            <option value="MME">MME</option>
                                           </select>
                                        </div><br />
                                           <div class="form-group">
                                           <input type="file" name="imagex" accept=".pdf,.docx,.jpg,.jpeg,.png"/>
                                           

                                        </div>
                                       
                                    </div>




                                    <div class="col-md-6">

                                    <div class="form-group">
                                        <input type="email" class="form-control" name="Organiser" placeholder="Uploaded by(Name)" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" name="branchx" class="form-control" placeholder="Paper Setter Name *" value="" />
                                        </div>

                                        <div class="form-group">
                                            {/* <label style={{fontSize:"10px"}}>Type of file</label> */}
                                        {/* <select id="s1"  class="filter" style={{width:"auto"}}>
                                        <option value="" disabled selected>Type of file</option>
                                            <option value="1">Written notes</option>
                                            <option value="2">Lecture Slides</option>
                                            <option value="3">External Resource</option>
                                            <option value="4">Other</option>
                                            </select> */}
                                        </div>
                                        <br />
                               
                                        <div class="form-group">
                                        
                                <textarea 
                                  id="text" 
                                  cols="40" 
                                  rows="2" 
                                  name="image_textx" 
                                  placeholder="Tags..."></textarea>
                                           </div>                                         
                                        {/* <input type="submit" name="uploadx" class="btnRegister"  value="Register" /> */}
                                        <button type="button" class="btn btn-lg btn-outline-primary">Register</button>
                                    </div>
                                </div>
                            </div>
                                
                                        
                              
                            </div>
                        </div>
                    </div>
                </div>
       </div> 
    
    

    </>
    
);
};


export default QForm;