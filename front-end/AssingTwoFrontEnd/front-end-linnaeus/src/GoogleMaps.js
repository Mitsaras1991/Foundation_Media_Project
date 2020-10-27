import {Map, InfoWindow,Marker, GoogleApiWrapper} from 'google-maps-react';
 import React from 'react'
import { Link } from 'react-router-dom';
 const containerStyle = {
    //position: 'relative',  
    width: '60%',
    height: '40%'
  }
  const style = {
    width: '90%',
    height: '90%'
  }
export class MapContainer extends React.Component {
    constructor(props){
        super(props)
        this.state={
            showingInfoWindow: false,
        activeMarker: {},
        selectedPatient: {}
        }
    }
    selectPatient=(id)=>{
        console.log(id)

    }
    onMarkerClick=(props)=>{
        console.log(props)
    }
    onMarkerClick = (props, marker, e) =>{
    console.log(props)
    this.setState({
      selectedPatient: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
}
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }
  render() {

      console.log(this.state.selectedPatient)
      const {patients}=this.props;
    return (
      <Map google={this.props.google}
      onClick={this.onMapClicked}
      containerStyle={containerStyle}
      fullscreenControl={true}   
      mapTypeControl={true}
      mapTypeControl= {true}
      initialCenter={{
        lat: 55,
        lng: 13
      }}
      style={style}
      zoom={1}>
          {patients.map((pa,index)=>
          <Marker 
          key={index} 
          position={{ lat: pa.latitude, lng: pa.longitude}} 
          onClick={this.onMarkerClick}
          name={pa.name}
          id={pa.id}>    
          </Marker>)}
         <InfoWindow marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPatient.name}</h1>
              <a href={`/med/${this.state.selectedPatient.id}/vis`}>{this.state.selectedPatient.name}</a>

            </div>
        </InfoWindow>  
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
   
  apiKey: "AIzaSyC1EDP1yLyeqyiO6MGf17xSd-WUaJ3CESk"
})(MapContainer)