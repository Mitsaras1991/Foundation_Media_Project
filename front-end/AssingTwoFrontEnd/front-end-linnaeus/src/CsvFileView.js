import React,{ Component } from "react";
import { getPatientDataUrl,getSessionNotes } from "./ApiUtils";
import YoutubeVideoPlayer from './YoutubeVideoPlayer'
import { readString } from 'react-papaparse'
import CSVReader from 'react-csv-reader'
import DataTable from 'react-data-table-component';
import csv from 'csvtojson'
import CsvDownloader from 'react-csv-downloader';
import { Button } from 'react-bootstrap';

import { JsonToTable } from "react-json-to-table";
import DataTableExtensions from 'react-data-table-component-extensions';
import LoadingScreen from "./common/LoadingScreen";
import Notes from "./Notes";
class CsvFileView extends Component{
    constructor(props){
        super(props)
        this.state={
            loading:true,
            json:null,
            csv:null,
            columns:[],
            showFile:true
        }
    }
    

    componentDidMount(){
        const dataTex=new DataTableExtensions(this.state.columns,this.state.csv);
        console.log(this.props)
            const {dataUrl}=this.props.match.params
            getSessionNotes(dataUrl).then(response=>console.log(response)).catch(error=>console.log(error))
        getPatientDataUrl(dataUrl)
        .then(response=>{

             
            console.log(response)
            var results=readString(response,{
                header:true,  
                 complete: (results) => {
                      console.log('Results:', results)
                      console.log('Fields', results.meta.fields)
                      let col=[results.meta.fields];
                      let columns=[]
                      results.meta.fields.forEach(o=>{
                          console.log(o)
                          let p;
                          p={name:o,selector:o,sortable:false}
                          console.log(p)
                          columns.push(p)
                        })
                    this.setState({columns})
                    }
            })
            this.setState({csv:results,loading:false})
/*             csv().fromString(response).then(json=>{
         
                console.log(results)
                this.setState({json,csv:results})
            }) */
        })
        .catch(error=>console.log(error))
    }
    onExport=(e,type)=>{
        console.log(e)
        console.log(type)
    }
   render(){
    const {dataUrl,testType}=this.props.match.params
    const {authority}=this.props.user.role
    console.log(authority)
    console.log(this.state.showFile)

    if(this.state.loading){
    return <LoadingScreen/>
    }   
     else  return(     
    <>
        {authority==="researcher"?<><ReasearcherDataView  testType={testType}  columns={this.state.columns} data={this.state.csv.data} />        </>    
       :<Notes url={dataUrl} data={this.state.csv.data} testType={testType}/>}
        <>
 
    </> 
      
    </>   
  )
} }  ;

class ReasearcherDataView extends React.Component{
    constructor(props){
        super(props)
        this.state={
            showFile:true
        }
    }
    toggleShow=()=>{
        this.setState({showFile:!this.state.showFile})
    }
    render(){
        console.log(this.state.showFile)
        return(
            <div>
                <Button
                    variant="primary"
                    onClick={this.toggleShow}
                     >
                {this.state.showFile ? 'View Svg' : 'View File'}
                </Button>
{
    this.state.showFile?   <>

    <DataTable
    columns={this.props.columns}
    data={this.props.data}
    defaultSortAsc={false}
    noHeader
    pagination
    highlightOnHover
        />
        <CsvDownloader
            filename={`${this.props.dataUrl}.csv`}
            data={this.props.data}
            text="DOWNLOAD" /></>:<Notes url={this.props.dataUrl} data={this.props.data} testType={this.props.testType}/>
}
            </div>
        )
    }
}
export default CsvFileView;
