import React, { Component } from 'react';
import {EditableAnnotation,ConnectorLine,Note} from 'react-annotation'
class SpiralParticle extends Component {
    constructor(props) {
        super(props)
    }
    render() {

        console.log(this.props.spiralParticle);
        return (
            <div>
                <svg width="500" height="300" style = {{border: "1px solid grey"}}>

                <EditableAnnotation
                x={150}
                 y={170}
                dy={117}
                dx={162}
              color={"#9610ff"}     
             title={"Annotations :)"}
             label={"Longer text to show text wrapping"}
         className="show-bg"
            >
  <ConnectorLine />
  <Note 
    align={"middle"}
    orientation={"topBottom"}
    bgPadding={20}
    padding={15}
    titleColor={"#59039c"} />
</EditableAnnotation>
                    {this.props.spiralParticle.map((particle) => (

                        <circle cx={particle.X} cy={particle.Y} r="4" style ={{fill:"#00939D"}} />

                    ))
                    }
                </svg>
            </div>
        )
    }

}

export default SpiralParticle;