import React from 'react'
import { Redirect, Route } from 'react-router-dom';

const AuthenticatedRoute=({comp:Component,authenticated, ...rest})=>{
    console.log(authenticated)
    return(

        <Route  {...rest} render={props=>
            authenticated  ?
            <Component  {...props}  {...rest} />
             :<Redirect to={{
                pathname:"/",
                state:{ from: props.location}
            }}/>
        } />
    )
  
    }


export default AuthenticatedRoute;