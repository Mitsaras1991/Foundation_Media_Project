import React from 'react'
import { Table, Toast } from 'react-bootstrap'

const { Link } = require("react-router-dom")

export const PatientTestData=({sessionList})=>(
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
  <tbody>
        {sessionList.map((item,index)=>
        <Session key={index}  session={item}/>
        )}
  </tbody>
 </Table>
</div>)
const Session=({session})=>{
    console.log(session)
    return(<tr>
      <td>{session.id}</td>
      <td>{session.testType}</td>
      <td>{session.testId}</td>
      <td>{session.dataUrl}</td>
        <td>{    <Link to={{
        pathname:`/csv/${session.dataUrl}/view`
        }}>View</Link>}</td>
    </tr>)

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