import React, { Component } from 'react';
import {EditableAnnotation,ConnectorLine,Note} from 'react-annotation'
class SpiralParticle extends Component {
    constructor(props) {
        super(props)
    }
    render() {

        console.log(this.props.user);
        return (
            <div>
                
                <svg width="800" height="800" style = {{border: "1px solid grey"}}>
                {this.props.notes.length && <SvgAnnotationNotes {...this.props}/> }

                    {this.props.spiralParticle.map((particle) => (

                        <circle cx={particle.X} cy={particle.Y} r="4" style ={{fill:"#00939D"}} />

                    ))
                    }
                </svg>
            </div>
        )
    }

}


const SvgAnnotationNotes=({notes})=>{
    notes.forEach((p,i)=>console.log(p))
   return notes.map((note,index)=><EditableAnnotation key={index}
        x={100}
         y={157}
        dy={index*130}
        dx={400}
      color={"#9610ff"}     
     title={`Annotations : ${note.med.email} `}
     label={`${note.note}`}
 className="show-sm"
    >
<ConnectorLine/>
<Note 
align={"middle"}
orientation={"topBottom"}
bgPadding={20}
padding={15}
titleColor={"#59039c"} />
</EditableAnnotation>)
}
export default SpiralParticle;


