import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthorityLinks from './AuthorityLinks';
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL } from '.././constants';
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        //const { path } = this.props.match
        console.log(this.props)
        return (
            <header className="app-header">
                <div className="container" >                   
                        <Link to="/" className="app-title">A3App</Link>
                        <div className="app-branding nav">
                        <ul>

                            <li class="p">
                                <a href={GOOGLE_AUTH_URL} class="black"> Patient</a>
                            </li>
                            <li class="d">
                                <a href={FACEBOOK_AUTH_URL} class="black"> Phycisian</a>
                            </li>
                            <li class="r">
                                <a href={GITHUB_AUTH_URL}class="black"> Reseacher</a>
                            </li>
                        </ul>
                    </div>
                    <div className="app-options">
                        <nav className="app-nav">
                            {this.props.authenticated ? (
                                <ul>
                                    <li>
                                    <NavLink to={`/profile`} className="link">Profile</NavLink>                                    </li>
                                    <li>
                                        <AuthorityLinks {...this.props} />
                                    </li>

                                    <li>
                                        <a onClick={this.props.logOut}>Logout</a>
                                    </li>
                                </ul>
                            ) : null}
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
