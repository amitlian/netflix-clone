import React, { useRef, useState } from "react"
import "../signupfolder/SignUpScreen.css"
import {auth} from "../firebase";


function SingUpScreen() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);



    const register = (e) =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((authUser)=>{
            console.log(authUser);
        })
        .catch((error)=>{
            alert(error.message);
        })
    };

    const singIn = (e) =>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((authUser)=>{
            console.log(authUser);
        })
        .catch((error)=>{
            alert(error.message);
        })

    };


    return(
            <div className="signupScreen">
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder="Email" type="email"></input>
                <input ref={passwordRef} placeholder="Password" type="password"></input>
                <button onClick={singIn} type="submit">Sign In</button>
                <h4>
                    <span className="grey">New To Netflix? </span>
                    <span className="signup_underline" onClick={register}>Sign Up Now</span>
                    
                </h4>
            </form>

        </div>       
    )
    
}

export default SingUpScreen;