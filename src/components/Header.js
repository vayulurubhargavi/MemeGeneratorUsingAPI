import React from "react";

function Header(){
    return(
        <div className="Header">
            <div className="Header-Name" style={{color:"blueviolet"}}>
            <i class="fa-solid fa-masks-theater">  Meme-Generator </i>
               
            </div>
            <div className="project-details" style={projectstyle} >
                React Course-Project-3
            </div>
        </div>
    )
}



export default Header;

const projectstyle={
    color:'red',
    fontSize:'17px',
    fontWeight:'600'
}