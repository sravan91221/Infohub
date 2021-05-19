import React from 'react'
import loginImg from "../login.svg";
import Slideshow from './Slideshow';



export default function Body() {

    return (
        <div class="container">
            <div className="row my-5">
                <div className="Matter col-md-5 ">
                    <p>
                            
                    </p>
                    <p>
                        Hello everyone!!!
                    </p>
                    <p>
                        This is our college infohub :)
                    </p>
                    <p>After completion of these courses you will be awarded with the certificate of appreciaition and also you will be called for certain interns.Also based upon your performance you will be awarded with stipends accordingly.
                    </p>
                    <p>
                        Hii bye frands
                    </p>
                </div>
                <div className="offset-md-1 col-md-6">
                     <Slideshow />                    
                </div>
            </div>  
                      
        </div>
       
    )
}

