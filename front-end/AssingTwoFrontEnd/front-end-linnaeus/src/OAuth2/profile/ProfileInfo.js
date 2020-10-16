import React,{ Component } from "react";
import { Card } from "react-bootstrap";
import './ProfileInfo.css'

class ProfileInfo extends Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props.user)

        return(
            <div className="profile-container">
                 <div className="container">
                 <Card className="profile-info" >
                     { 
                                this.props.user.imageUrl ? <div className="profile-avatar" ><Card.Img  variant="top"  src={this.props.user.imageUrl}/></div> : (
                                    <div className="text-avatar">
                                        <span>{this.props.user.name && this.props.user.name[0]}</span>
                                    </div>
                                )
                            }
                <Card.Body>
                <Card.Title>Username</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{this.props.user.name}</Card.Subtitle>
                <Card.Title>Email</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{this.props.user.email}</Card.Subtitle>
                <Card.Title>Role</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{this.props.user.role.authority}</Card.Subtitle>
                 </Card.Body>
            </Card>   
            </div>
            </div>
        )
    }
}

export default ProfileInfo;