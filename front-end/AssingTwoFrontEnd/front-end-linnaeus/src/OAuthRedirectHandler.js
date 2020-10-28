import React,{ Component } from  "react";
import queryString from 'query-string';
import { Redirect } from "react-router-dom";
const ACCESS_TOKEN = 'accessToken'

class OAuthRedirectHandler extends Component{
    constructor(props){
        super(props)
    }
    render(){
        let url = this.props.location.search;
        console.log(this.props.location)
        let params = queryString.parse(url);
        const {token,error}=params;
        console.log(token);
        console.log(error);
        if(token){
            localStorage.setItem(ACCESS_TOKEN,token)
            return <Redirect to={{
                    pathname:"/profile",
                    state:{from:this.props.location}
                }}
            />
        }
        else{
            return<Redirect to={{
                pathname:"/",
                state:{
                    from:this.props.location,
                    error:error
                }

            }}/>
        } 
    }
}
export default OAuthRedirectHandler;