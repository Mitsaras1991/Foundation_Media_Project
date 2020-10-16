import React ,{ Component } from "react";
import {NavLink,Switch,Route} from 'react-router-dom'
import Comments from "./CsvFileView";
import AuthorityLinks from "./common/AuthorityLinks";
import ProfileInfo from "./OAuth2/profile/ProfileInfo";
import Parser from 'rss-parser';
import { getTestSession } from "./ApiUtils";
import RoleRoute from "./common/AuthorityRoute";
import AuthenticatedRoute from "./common/AuthenticatedRoute";
import { Col, Container, Row } from "react-bootstrap";
class Dashboard extends Component{
    constructor(props){
        super(props)
        console.log(props);
      
    }
    render(){
        const { path } = this.props.match
        console.log(this.props.user.role.authority)
        return(
            <Container>
                <Switch>
                    <Route path={`${path}`} exact render={(props)=><ProfileInfo {...props} {...this.props}/>} />
                    <RoleRoute path={`${path}/view`} role={this.props.user.role}  {...this.props}/>
                </Switch>
            </Container>  
        )
    }
}


export default Dashboard
{/* <AuthenticatedRoute  path="/csv/:dataUrl/view"  comp={Comments}
authenticated={this.state.authenticated} user={this.state.currentUser}>
</AuthenticatedRoute> */}
{/* <Container>
<Row>
<Col lg={3}>Rss Feed</Col>
                <Col lg={8}>{testSessionData?<PatientTestData sessionList={testSessionData}/>:<div>No data available</div>}  </Col>
                 </Row>
            </Container> */}