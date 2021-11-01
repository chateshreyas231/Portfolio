import React from 'react'
import './linkstyles.css'
import './Main.css'
import pic from './photos/hey.png'


function Main() {

    return (
        <div className="main">
    
                <div class="body font__color">
                 <h1 class="name name--effect">{'<'} Shreyas Chate {'/>'}
                 <br/><p class="hover_me"><br/>Hover Me</p><h4>Web Devloper | ML engineer</h4></h1>
			    </div>
                <div className="avtar">
                <img src={pic} alt=""/>
                </div>
                
       </div>
    )
}

export default Main


