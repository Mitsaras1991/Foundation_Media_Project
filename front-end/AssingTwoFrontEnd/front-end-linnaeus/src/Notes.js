import React from 'react'
import { getPatientDataUrl,getSessionNotes } from "./ApiUtils";
import LoadingScreen from './common/LoadingScreen';
import SpiralParticle from './SpiralParticle';
import TappingBox from './TappingBox';
import {Form,InputGroup,Button,FormControl} from 'react-bootstrap'

class Notes extends React.Component{
    constructor(props){
        super(props)
        this.state={
            loading:true,
            notes:[]
        }
    }
    addNote=(note)=>{
        console.log(note)
        let tmpNotes=this.state.notes
        let temp={};
        temp={note,med:{email:this.props.user.email}}
        tmpNotes.push(temp);
        this.setState({notes:tmpNotes})
    }
componentDidMount(){
    const {url}=this.props
    getSessionNotes(url).then(response=>{
        console.log(response)
        this.setState({loading:false,notes:response})
    }).catch(error=>this.setState({loading:false}))

}
    render(){
        const {authority}=this.props.user.role
        console.log(authority)
        if(this.state.loading){
            return(<LoadingScreen/>)
        }
       else return(<div>
           {authority==="researcher" && <NoteCreator email={this.props.user.email} addNote={this.addNote}/>}
            {this.props.testType==="1"?<SpiralParticle  notes={this.state.notes} spiralParticle={this.props.data}/>:<TappingBox notes={this.state.notes} tappingBox={this.props.data}/>}
        </div>)
    }
}
class NoteCreator extends React.Component{
    constructor(props){
        super(props)
        this.state={
            note:null
        }
        
    }
    handleChange=(e)=>{
        console.log(e.target.name)
        this.setState({note:e.target.value})
    }
    handleClick=(e)=>{
        console.log(this.state.note)
        this.setState({note:e.target.value})
        this.props.addNote(this.state.note)
    }
    render(){
        return(
           <div style={{display:"inline-block",paddingRight:"10px"}}>
               <span style={{marginRight:"10px"}}>{this.props.email}</span>
               <input style={{marginRight:"10px"}} name="note" onChange={this.handleChange}  type="text" value={this.state.note}/>
               <Button type="button" onClick={this.handleClick}> Create Note</Button>
           </div>
        )
    }
}
export default Notes
