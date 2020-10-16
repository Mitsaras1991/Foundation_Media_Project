import React from 'react'
import LoadingScreen from '../common/LoadingScreen'
import { getTestSession } from "../ApiUtils";
import { PatientTestData } from '../PatientTestData';
import { Col, Container, Row } from 'react-bootstrap';
import RssFeed from '../RssFeed';


class MedicalView extends React.Component{
    constructor(props){
        super(props)
    
        this.state={
            loading:true,
            testSessionData:null
        }
    }
     testSessionData=()=>{
        this.setState({
            loading: true
          });
        getTestSession().then(response=>
            this.setState({loading:false,testSessionData:response})
            )
            .catch(error=>
                this.setState({loading:false})
                )

    }
    componentDidMount(){
        this.testSessionData()
    }
    render(){
        const {loading,testSessionData}=this.state
        console.log(testSessionData)
        const {authority}=this.props.user.role
        console.log(authority)
        if(loading){
           return <LoadingScreen/>
        }
        else return(
            <>
            <Row className="justify-content-md-center">
                {authority==="researcher" && <Col xs={3}><RssFeed/></Col>}
                <Col xs={9}>{testSessionData?<PatientTestData sessionList={testSessionData}/>:<div>No data available</div>}</Col>
            </Row>    
            </>
        )
    }
}
export default MedicalView                                                   
