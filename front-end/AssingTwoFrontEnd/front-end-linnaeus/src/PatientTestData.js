import React from 'react'
import { Table, Toast } from 'react-bootstrap'

const { Link } = require("react-router-dom")

export class PatientTestData extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    console.log(this.props.sessionList) 
    return(
  <div>
   <Table>
      <thead>
       <tr>
          <th>#</th>
          <th>Test type</th>
          <th>Test id</th>
          <th>FileName</th>
          <th>Details</th>
       </tr>
    </thead>
    <tbody><tr/>
    {this.props.sessionList.map((item,index)=>(<tr key={index}>
      <td>{item.id}</td>
      <td>{item.testType}</td>
      <td>{item.testId.id}</td>
      <td>{item.dataUrl}</td>
      <td>    <Link {...this.props} to={{
        
        pathname:`/test/${item.testType}/${item.dataUrl}/view`
        }}>View</Link></td>
            
      </tr>))}
{/*           {this.props.sessionList.forEach((el,index) => (
          
            <tr>
            <td>{el.id}</td>
      <td>{el.testType}</td>
      <td>{el.testId}</td>
      <td>{el.dataUrl}</td>
        <td>{    <Link to={{
        pathname:`/csv/${el.dataUrl}/view`
        }}>View</Link>}</td>
            </tr>
          
          ))} */}
    </tbody>
   </Table>
  </div>)
  }
}
const Session=({session})=>{
    console.log(session)
    return(<>
      <td>{session.id}</td>
      <td>{session.testType}</td>
      <td>{session.testId}</td>
      <td>{session.dataUrl}</td>
      <td>    <Link to={{
        state:{from:session.testType},
        pathname:`/csv/${session.dataUrl}/view`
        }}>View</Link></td>
    </>)

  /*   {session.dataUrl}

    </div>  */ 
    }
{/* <Toast>
<Toast.Header>
  <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
  <strong className="mr-auto">Bootstrap</strong>
  <small>11 mins ago</small>
</Toast.Header>
<Toast.Body>Hello, world! This is a toast message.</Toast.Body>
</Toast> */}