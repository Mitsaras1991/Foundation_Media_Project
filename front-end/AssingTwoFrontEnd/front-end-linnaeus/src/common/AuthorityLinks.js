import React from 'react'
import {NavLink} from 'react-router-dom'

const AuthorityLinks=({user,...rest})=> {
    console.log(user)
    
    const { authority } = user.role
    console.log(authority)
return(
        <>
        <NavLink to={`/dashboard/view`} className="link">{authority==="patient"?'Exercise Video':'Patient Test Data'}</NavLink>
        </>
    )

}
export default AuthorityLinks;