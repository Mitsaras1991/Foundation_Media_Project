import React, { Component } from 'react';
import './Home.css';
import fblogo from './images-logos/fb-logo.png';
import googleLogo from './images-logos/google-logo.png';
import githubLogo from './images-logos/github-logo.png';
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL } from './constants'
import './SubMenuBoxes.css';

class SubMenuBox extends Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            <div class="flex-div2">
            <div class="p1">
                <h2>For PD Patients</h2>
                <p>
                    Enjoy video exersices for you <br></br>and view your progress</p>
                
                    <a href={GOOGLE_AUTH_URL} class=" btn-S social-btn google border-go">
                    <img src={googleLogo} alt="Google" /> Log in with Google</a>
               
            </div>
            <div class="d2">
                <h2>For Doctors</h2>
                <p>Reach your patiens data and<br></br> compare it with your therapy</p>
               
                <a href={FACEBOOK_AUTH_URL} class=" btn-S  social-btn facebook border-fb">
                <img src={fblogo} alt="Facebook" />Log in with Facebook</a>
                
            </div>
            <div class="r3">
                <h2>For Researchers</h2>
                <p>View and annote patiens data visualization<br>
                </br> and latest news feed</p>
                
                    <a href={GITHUB_AUTH_URL} class=" btn-S social-btn github border-git">
                    <img src={githubLogo} alt="Github" />Log in with Github</a>
                
            </div>
        </div>
        )
    }

}

export default SubMenuBox;