import React from 'react'
import { Button } from 'react-bootstrap'
import login from '../login.svg'
export default function Card(props) {
 
    return (
        
           
             <div class="card col-md-3 border-0 " >
               <div class=" mx-2 my-2 border rounded shadow">
               <img class="img-responsive card-img-top card-img" src={login}/>
            <div class="card-body">
        <p class="card-text">{props.description}</p>
        <p>Hi there!</p>
        <p>This is your required material.</p>
               <Button size="md" className="  bg-primary border border-info  mx-2" style={{alignItems:"center"}}>Know More</Button>
      </div>
    </div>
    </div>
    
    )
}