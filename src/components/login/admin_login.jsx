import React from "react";
import loginImg from "../../login.svg";

export class Admin_Login extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div className="base-container" ref={this.props.containerRef}>
            <div className="header">Register</div>
            <div className="content">
                {/* <div className="image">
                    <img src={loginImg} />
                </div> */}
                <div className="form">
                    
                    <div className="form-group">
                        <label htmlFor="Username">Username</label>
                        <input type="text" name="username" placeholder="Enter the Username/email" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Password">Password</label>
                        <input type="password" name="password" placeholder="Enter the password" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Password">Confirm Password</label>
                        <input type="password" name="Confirm password" placeholder="Confirm your password" required/>
                    </div>
                    
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn1">
                   Register
                </button>
            </div>
        </div>
    
   
       
    }
}