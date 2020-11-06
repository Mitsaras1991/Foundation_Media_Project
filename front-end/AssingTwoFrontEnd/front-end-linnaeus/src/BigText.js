import React, { Component } from 'react';
import './Home.css';
import './BigText.css';
import homePage from './images-logos/homepage.png';

class BigText extends Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            <div>
                <div class="flex-div1">

                    <div class="title">
                        <h3>Where PD patients, physicians and researchers collaborate together</h3>
                        <p>
                            A3App helps PD patients, physicians and researchers to exercise, visualize exrcize data
                            monitor PD patient's motor skills in common vitual ground.  <a>Learn more</a>
                        </p>
                    </div>

                    <div>
                        <div class="slideshow-container">
                            <img  src={homePage} alt="Logo" className = ""></img>
                        </div>
                    </div>

                </div>
            </div>

        )
    }

}

export default BigText;