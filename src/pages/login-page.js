import React, { Fragment } from "react";

class LoginPage extends React.Component{
    render(){
        return(
            <Fragment>
            <div id="layer_login">
            </div>
             
             <div id="form-login">
                 <div id="login_login">
                     <h2>LOGIN</h2>
                 </div>
                 <div id="username_login">
                     <h3>Username</h3>
                     <input type="text"/>
                 </div>
                 <div id="password_login">
                     <h3>Password</h3>
                     <input type="password"/>
                 </div>
         
                 <div id="submit_login">
                     <button><a href="">Log In</a></button>
                 </div>
         
                 <div id="forgot-password">
                     <a href="">Lupa Password</a>
                     <a href="../register-page/index.html">Daftar</a>
                 </div>
                 
             </div>
             </Fragment>
                )
    }
}

export default LoginPage;