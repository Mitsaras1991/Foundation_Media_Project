import React from 'react';
import logo from './logo.svg';
import {Switch,Route,BrowserRouter as Router}  from 'react-router-dom'
import './App.css';
import AuthenticatedRoute from './common/AuthenticatedRoute';
import { getCurrentUser } from './ApiUtils';
import Home from './Home';
import Profile from './Dashboard';
import OAuthRedirectHandler from './OAuthRedirectHandler';
import Header from './common/Header';
import CsvFileView from './CsvFileView';
import Dashboard from './Dashboard';
import { ACCESS_TOKEN } from './constants';
import PatientListView from './Views/PatientListView';
import RolePatientView from './Views/RolePatientView';
import PatientDataVisualization from './PatientDataVisualization';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      authenticated:false,
      loading:false,
      currentUser:null

    }
    this.loadUser=this.loadUser.bind(this)
  }
    loadUser(){
      this.setState({
        loading: true
      });
      
      getCurrentUser().then(response=>{
        console.log(response)
        this.setState({
          authenticated:true,
          loading:false,
          currentUser:response
        })
      })
      .catch(error=>{
        this.setState({
          loading:false
        })
      })
    }
    componentDidMount(){
      this.loadUser();
    
  }
  logOut=()=>{
    localStorage.removeItem(ACCESS_TOKEN)
    this.setState({authenticated:false})
  }
  render
  (){
    console.log(this.state.currentUser)
    console.log(this.state.authenticated)
    if(this.state.loading){
      return <div>
        loading
      </div>
    }
    else return (
      <div className="App">
        <div className="">
            <Header authenticated={this.state.authenticated} logOut={this.logOut} user={this.state.currentUser}/>
        </div>
              <div className="app-body">
             <Switch>
                     <Route exact path="/" render={props=><Home authenticated={this.state.authenticated} {...props}/>}/>
                     <AuthenticatedRoute  path="/dashboard"  comp={Dashboard}
                     authenticated={this.state.authenticated} user={this.state.currentUser}>
                     </AuthenticatedRoute>
                     <AuthenticatedRoute  path="/csv/:dataUrl/view"  comp={CsvFileView}
                      authenticated={this.state.authenticated} user={this.state.currentUser}>
                      </AuthenticatedRoute>
                      <AuthenticatedRoute  path="/med/:patientID/vis"  comp={PatientDataVisualization}
                      authenticated={this.state.authenticated} user={this.state.currentUser}>
                      </AuthenticatedRoute>
                      <AuthenticatedRoute  path="/med/patients/view"  comp={PatientListView}
                      authenticated={this.state.authenticated} user={this.state.currentUser}>
                      </AuthenticatedRoute>
                    <Route path="/oauth2/redirect" component={OAuthRedirectHandler}/>
             </Switch>    
              </div>
      </div>
      )
  } 
}

export default App;
