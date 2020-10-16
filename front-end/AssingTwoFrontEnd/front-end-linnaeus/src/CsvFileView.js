import React,{ Component } from "react";
import { getPatientDataUrl } from "./ApiUtils";
import YoutubeVideoPlayer from './YoutubeVideoPlayer'
import { readString } from 'react-papaparse'
import CSVReader from 'react-csv-reader'
import DataTable from 'react-data-table-component';
import csv from 'csvtojson'
import CsvDownloader from 'react-csv-downloader';

import { JsonToTable } from "react-json-to-table";
import DataTableExtensions from 'react-data-table-component-extensions';
import LoadingScreen from "./common/LoadingScreen";
class CsvFileView extends Component{
    constructor(props){
        super(props)
        this.state={
            loading:true,
            json:null,
            csv:null,
            columns:[]
        }
    }
    componentDidMount(){
        const dataTex=new DataTableExtensions(this.state.columns,this.state.csv);
        console.log(dataTex)
            const {dataUrl}=this.props.match.params
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
    const {dataUrl}=this.props.match.params
    if(this.state.loading){
    return <LoadingScreen/>
    }   
     else  return(     
    <>
        {this.state.csv && 
        <>
        <DataTable
         columns={this.state.columns}
         data={this.state.csv.data}
        defaultSortAsc={false}
        noHeader
        pagination
        highlightOnHover
        />
        <CsvDownloader
        filename={`${dataUrl}.csv`}
        datas={this.state.csv.data}
        text="DOWNLOAD" />
    </> 
      }
    </>   
  )
} }  ;

export default CsvFileView;