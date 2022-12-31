import React, { Fragment } from "react";


class RegisterPage extends React.Component{
    render(){
        return(
            <Fragment>
               <div id="layer_register">

</div>
    <div id="page-left_register">
      
       
     
    </div>
    <div id="page-right_register">
        <div id="judul_register">
          <h2>REGISTER</h2> 
          </div>
          <div id="become_register">
            <h1>BECOME A QUR'AN FAMILY</h1>
          </div>
          <div id="opened_register">
            Registration is now open. Let's join us to be Al-Qur'an Family
          </div>
          <div id="input-data_register">
            <div id="phone_register">
            Phone
            <input type="text"/>
            </div>
            <div id="name_register">
            Name
            <input type="text"/>
            </div>
            <div id="email_register">
             Email
             <input type="text"/>
             <div id="password_register">
                Password
                <input type="text"/>
             </div>
             <div id="submit_register">
                <button>Submit</button>
             </div>
            </div>
          </div>
        </div>
     
    
    </Fragment>
        )
    }
}

export default RegisterPage;