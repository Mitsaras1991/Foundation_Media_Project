import React,{ Component } from "react";
import { Redirect } from "react-router-dom";
import './Home.css'
import fblogo from './images-logos/fb-logo.png';
import googleLogo from './images-logos/google-logo.png';
import githubLogo from './images-logos/github-logo.png';
import {GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL,GITHUB_AUTH_URL} from './constants'
class Home extends Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props.location)
        console.log(this.props.location.state)
        const {state}=this.props.location
      const redirectPathAfterLogin= state?state.from.pathname:"/dashboard/"
        //console.log(from)
if(this.props.authenticated){
 return(
     <Redirect to={{
        pathname:redirectPathAfterLogin,
        state:{}
     }} {...this.props}/>
 )
}
 else return(
            //this.props.history.push(this.props.location.state.from.pathname)
            <div className="login-container">
                <div className="login-content">
                 <h1 className="login-title">Login to SpringSocial</h1>
                    <div className="social-login">
                        <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
                        <img src={googleLogo} alt="Google" /> Log in with Google as Patient</a>
                        <a className="btn btn-block social-btn facebook" href={FACEBOOK_AUTH_URL}>
                         <img src={fblogo} alt="Facebook" /> Log in with Facebook as Physician</a>
                        <a className="btn btn-block social-btn github" href={GITHUB_AUTH_URL}>
                        <img src={githubLogo} alt="Github" /> Log in with Github as Researcher</a>
                    </div>
                </div> 
            </div> 
        )
    }
}

export default Home;