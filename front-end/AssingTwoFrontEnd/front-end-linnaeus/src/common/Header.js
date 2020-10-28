import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthorityLinks from './AuthorityLinks';
import './Header.css';

class Header extends Component {
    constructor(props){
        super(props)
    }
    render() {
        //const { path } = this.props.match
console.log(this.props)
        return (
            <header className="app-header">
                <div className="container">
                    <div className="app-branding">
                        <Link to="/" className="app-title">Linnaeus PD eHealth</Link>
                    </div>
                    <div className="app-options">
                        <nav className="app-nav">
                                { this.props.authenticated ? (
                                    <ul>
                                        <li>
                                            <NavLink to={`/profile`} className="link">Profile</NavLink>
                                            </li>
                                          <li>
                                          <AuthorityLinks {...this.props}/>  
                                          </li>
                                            
                                        <li>
                                            <a onClick={this.props.logOut}>Logout</a>
                                        </li>
                                    </ul>
                                ): null}
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;