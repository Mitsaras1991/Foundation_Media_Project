import React from 'react'
import {withGoogleMap, GoogleMap, Marker, withScriptjs } from "react-google-maps"
import GoogleMaps from '../GoogleMaps'
import MyMapComponent from '../MapComponent'

const RolePatientView=({user,patients,...rest})=>{
    const {authority}=user.role
    console.log(authority)
    return(
        <div>
            Patient View 
            Role:{authority}
            {authority==="researcher"?<ResearcherPatientView patients={patients} {...rest}/>:<DefaultPatientView {...rest} patients={patients}/>}
        </div>
    )
}

const DefaultPatientView=({patients , ...rest})=>{
    console.log(patients)
    patients.forEach((p,i)=>console.log(p))
    return(
        <>
        Patients
            {
            patients.map((p,i)=><div key={i}><Patient {...rest}  email={p.email} id={p.id} name={p.name}/></div> )       
            }
        </>
    )
}
    
    
const Patient=({email,id,name})=>{
    console.log(email)
    return(<div>
        <div>
            <h5>{email}</h5>
            <span>{name}</span>
        </div>
    </div>)
}

  //const WrappedMap=withScriptjs(withGoogleMap(Map))

    
class ResearcherPatientView extends React.Component{
    constructor(props){
        super(props)
    }
        render(){
            console.log(this.props)
            return(<div>
                
                <GoogleMaps patients={this.props.patients}/>
            </div>)
        }
}

/* const Map=(props)=>{
    return(
        <div>
            <WrappedMap 
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${MapApiKey}&v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}/>
        </div>
    )
} */
const MapApiKey="AIzaSyC1EDP1yLyeqyiO6MGf17xSd-WUaJ3CESk"
export default RolePatientView;
