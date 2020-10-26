import React from 'react'
import {getPatients} from '../ApiUtils'
import LoadingScreen from '../common/LoadingScreen'
import RolePatientView from './RolePatientView'
class PatientListView extends React.Component{
    constructor(props){
        super(props)
        this.state={
            loading:true,
            patients:[]
        }
    }
    loadPatients=()=>{
        getPatients().then(response=>{
            console.log(response)
            this.setState({patients:response,loading:false})
        }).catch(error=>{
            this.setState({loading:false})
        })
    }

    componentDidMount(){
        this.loadPatients();
    }
    render(){
        const {loading,patients}=this.state
        if(loading){
            return(<LoadingScreen/>)
        }
       else { 
           return(
            <div>
                PatientListView
                {patients && <RolePatientView {...this.props} patients={patients}/>}
            </div>
        )}
    }
}

export default PatientListView