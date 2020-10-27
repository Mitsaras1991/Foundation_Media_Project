import React from 'react'
import {getPatientTests} from './ApiUtils'
class PatientDataVisualization extends React.Component{
    constructor(props){
        super(props)
        this.state={
            loading:true
        }
    }

    loadPatientTests=()=>{
        const {patientID}=this.props.match.params
        getPatientTests(patientID)
        .then(response=>{
            console.log(response)
        })
        .catch(error=>{

        })
    }
    componentDidMount(){
        this.loadPatientTests();
    }
    render(){
        const {loading}=this.state
    
           // console.log(patientID)
        return(
        <div>
            PatientDataVisualization
        </div>)
    }
}

export default PatientDataVisualization;