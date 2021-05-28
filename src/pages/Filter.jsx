import React from 'react'
import { FaCentercode } from 'react-icons/fa'

export default function Filter() {
    return (
        <div className="row">
            <center>
        <select id="s"   class="filter" style={{width:"100px"}}>
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
        
       
        <select id="s1"  class="mx-3 filter" style={{width:"100px"}}>
        <option value="" disabled selected>Year</option>
        <option value="1">I</option>
        <option value="2">II</option>
        <option value="3">III</option>
        <option value="4">IV</option>
        </select>

        <input type="hidden" name="first" id="f1" value="" />
        <input type="hidden" name="second" id="f2" value=" " />
        <input type="text" name="third" id="s2" class="filterr mx-3" style={{backgroundColor:"#ddd",padding:"5px",width:"100px",borderRadius:"5px"}} placeholder="Subject Name" />
        <button  type="button" class="btn  btn-outline-primary" onclick="c()" name="bt" >Search</button>
        {/* <button type="button" class="btn btn-lg btn-outline-primary">Register</button> */}
        </center>
        </div>
        
    )
}
