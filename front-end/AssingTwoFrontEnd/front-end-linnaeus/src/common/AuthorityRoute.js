import React from 'react'
import MedicalView from '../Views/MedicalView';
import PatientView from '../Views/PatientView';
const { Route } = require("react-router-dom");

const RoleRoute=({comp:Component,role, ...rest})=>{
    console.log(role)
    return(
    <Route {...rest} render={(props)=>
        role.authority==="patient"?<PatientView {...rest} {...props}/>
        : <MedicalView {...rest} {...props}/>
    }/>
)};
export default RoleRoute