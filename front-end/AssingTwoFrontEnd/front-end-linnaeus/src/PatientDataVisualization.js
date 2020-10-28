import React from 'react'
import {getPatientTests,getTestSessionPatient} from './ApiUtils'
import LoadingScreen from './common/LoadingScreen'
import { PatientTestData } from './PatientTestData'
import RssFeed from './RssFeed'
import { Col, Container, Row } from 'react-bootstrap';

class PatientDataVisualization extends React.Component{
    constructor(props){
        super(props)
        this.state={
            loading:true,
            testSessions:[]
        }
    }

    loadPatientTests=()=>{
        const {patientID}=this.props.match.params
        getTestSessionPatient(patientID)
        .then(response=>{
            console.log(response)
            this.setState({loading:false,testSessions:response})
        })
        .catch(error=>{
            this.setState({loading:false})
        })
    }
    componentDidMount(){
        this.loadPatientTests();
    }
    render(){
        const {loading,testSessions}=this.state
        console.log(this.props)
        const {authority}=this.props.user.role
           // console.log(patientID)
           if(loading){
               return(<LoadingScreen/>)
           }
        else return(
        <div>
            PatientDataVisualization
            <Row className="justify-content-md-center">
                {authority==="researcher" && <Col xs={3}><RssFeed/></Col>}
                <Col xs={9}>{testSessions?<PatientTestData sessionList={testSessions}/>:<div>No data available</div>}</Col>
            </Row>
        </div>)
    }
}

export default PatientDataVisualization;