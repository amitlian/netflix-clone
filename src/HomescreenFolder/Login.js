import React, { useState } from "react"
import "../HomescreenFolder/Login.css"
import SingUpScreen from "../signupfolder/SingUpScreen"

function Login() {
    const [signUp, setSignUp] = useState(false);
    return(
        <div className="LoginScreen">
            <div className="LoginScreen_background">
                <img className="LoginScreen_logo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"/>
                <button onClick={()=>{ setSignUp(true)}} className="LoginScreen_button">Sign In</button>
                <div className="LoginScreen_gradient"></div>
            </div>
            <div className="LoginScreen_body">
                {signUp? (
                    <SingUpScreen/>
                ): (
                <>
                <h1>Unlimited films, TV programmes and more.</h1>
                <h2>Watch anywhere. Cancel at any time.</h2>
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                <div className="LoginScreen_input">
                    <form>
                        <input type="email" placeholder="Email Address"/>
                        <button onClick={()=>{setSignUp(true)}} className="LoginScreen_getStart">GET STARTED</button>
                    </form>

                </div>
                </>)
                    
                }
            </div>
        </div>
    )
    
}

export default Login;