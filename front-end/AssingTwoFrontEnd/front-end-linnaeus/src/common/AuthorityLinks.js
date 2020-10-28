import React from 'react'
import {NavLink} from 'react-router-dom'

const AuthorityLinks=({user,...rest})=> {
    console.log(user)
    
    const { authority } = user.role
    console.log(authority)
return(
        <>
        {
            authority==="patient"?<NavLink className="link" to={'/patient/exercise/videos'}>Exercise Video</NavLink>
            :<NavLink className="link" to={'/med/patients/view'}>Patients</NavLink>
 
        }
{/*         <NavLink to={`/dashboard/view`} className="link">{authority==="patient"?'Exercise Video':' Test Session Data'}</NavLink>
 */}        </>
    )

}
export default AuthorityLinks;