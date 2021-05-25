import React from 'react'
import loginImg from "../login.svg";
import Slideshow from './Slideshow';
import Sample  from '../Images/sample.jpg';
import {NavLink} from "./Homepage/homepage"
 
import {
    NavBtn,
    
    } from './Homepage/homepage';
import Features from './Features';

export default function Body() {

    return (
        <div class="container">
            <div className="row my-5">
                <div className="Matter col-md-5 ">
                    <p style ={{fontSize:"30px",fontFamily:'sans-serif'}}>
                           Welcome to 
                    </p>
                    <p style ={{fontSize:"35px",fontWeight:'bold',fontFamily:'sans-serif'}}>
                        NIT AP's INFO HUB 
                    </p>
                    
                    <p>After completion of these courses you be with the certificate of appreciaition and also you will be called for certain interns.
                    </p>
                    
                    <div className="col-md-2 d-flex ">
                        <NavLink to='/login' activeStyle>
                           <button type="button" class="bodybtn btn btn-lg btn-primary mx-3" >Login</button>
                           <button type="button" class="btn btn-lg btn-outline-primary">Register</button>
                  	    </NavLink>
                    
                    
                    
		            </div>
                    
                    
                    
                </div>
                <div className="offset-md-1 col-md-6">
                     <Slideshow />                    
                </div>
            </div>  
            <div className="sample_image1" style={{width:"auto",}}>
                <img style={{width:"100%",}} src={Sample}/>
            </div>
            <Features />
                      
        </div>
       
    )
}  

