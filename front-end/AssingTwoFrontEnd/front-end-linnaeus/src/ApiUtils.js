import { readRemoteFile } from 'react-papaparse'
import axios from 'axios'

const ACCESS_TOKEN = 'accessToken'
const API_BASE_URL = 'http://localhost:8080'

const request=(options)=>{
    const headers=new Headers({
        "Content-type":"application/json"
    })
    console.log(localStorage.getItem(ACCESS_TOKEN))
    if(localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
        
    }
    const defaults={headers:headers}
    options=Object.assign({},defaults,options);
    console.log(options)
   return new Promise((resolve,reject)=>{
        fetch(options.url,options).
            then(response =>{
                response.json()
                 .then(json=>{
                    if(!response.ok){
                        reject(json)
                    }
                    resolve(json)
                })
             })
            .catch(error=>{
             reject(error)

            })
    })
}
const downloadRequest=(options)=>{
    const headers=new Headers();
    console.log(localStorage.getItem(ACCESS_TOKEN))
    if(localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
        
    }

    const defaults={headers:headers}
    options=Object.assign({},defaults,options);
    console.log(options)
    
   return new Promise((resolve,reject)=>{
        fetch(options.url,options).
            then(response =>{
               
                response.blob()
                 .then(async blob=>{
                    var textPromise = blob.text();
                    const file=blobToFile(blob,"data1")
                    console.log(file.name)
                    blob.text().then(text => text);
                    
                    var text = await blob.text();
                    console.log(blob.type)
                    //let response=
/*                     var a = window.document.createElement("a");
                    a.href = window.URL.createObjectURL(blob, {
                        type: "text/csv"
                      });
                      a.download = "filename.csv";
                      document.body.appendChild(a);
                      a.click();
                      document.body.removeChild(a); */
                     console.log(blob.stream().getReader().read());
                    if(!response.ok){
                        reject(blob)
                    }
                    resolve(text)
                })
             })
            .catch(error=>{
             reject(error)

            })
    })
}

export function getPatientDataUrl(fileData){
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }
    return downloadRequest({
        url: API_BASE_URL + `/report/${fileData}`,
        method: 'GET'
    });
}

export function getCurrentUser(){
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }
    
    return request({
        url: API_BASE_URL + "/user/me",
        method: 'GET'
    });
}
export function getTestSession(){
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }
    
    return request({
        url: API_BASE_URL + "/testSessions",
        method: 'GET'
    });
}
function blobToFile(theBlob, fileName){
    //A Blob() is almost a File() - it's just missing the two properties below which we will add
    theBlob.lastModifiedDate = new Date();
    theBlob.name = fileName;
    return theBlob;
}