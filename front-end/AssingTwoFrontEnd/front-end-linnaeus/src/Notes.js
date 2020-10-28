import React from 'react'
import { getPatientDataUrl,getSessionNotes } from "./ApiUtils";
import LoadingScreen from './common/LoadingScreen';
import SpiralParticle from './SpiralParticle';
import TappingBox from './TappingBox';

class Notes extends React.Component{
    constructor(props){
        super(props)
        this.state={
            loading:true,
            notes:null
        }
    }
componentDidMount(){
    const {url}=this.props
    getSessionNotes(url).then(response=>{
        this.setState({loading:false,notes:response})
    }).catch(error=>this.setState({loading:false}))

}
    render(){
        if(this.state.loading){
            return(<LoadingScreen/>)
        }
       else return(<div>
            {this.props.testType==="1"?<SpiralParticle  spiralParticle={this.props.data}/>:<TappingBox tappingBox={this.props.data}/>}
        </div>)
    }
}

export default Notes