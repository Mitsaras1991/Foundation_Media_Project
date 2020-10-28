import React, { Component } from 'react';

class TappingBox extends Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            <div style = {{paddingTop:"50px;"}}>
                <div style = {{marginTop:"20px;"}}>
                    <table>
                        <tr>
                            <td style={{ backgroundColor: "#D54D5C" }}></td>
                            <td style={{ backgroundColor: "#00865D" }}></td>
                            <td style={{ backgroundColor: "#FF8663" }}></td>
                        </tr>
                        <tr style = {{  }}>
                            <td style={{ color: "#D54D5C", padding:"0 3px"}}>Missed both buttons</td>
                            <td style={{ color: "#00865D", padding:"0 3px" }}>Tapped on the right button</td>
                            <td style={{ color: "#FF8663", padding:"0 3px"}}>Tapped on the wrong button</td>
                        </tr>
                    </table>
                </div>
                <svg width="180" height="1000px" onClick={this.onHandleClick}>

                    {this.props.tappingBox.map((boxes, i) => {
                        if (boxes.button == 1 && boxes.correct == 1) {
                            return (
                                <rect x="0" y={i * 12} width="30" height="10" fill="#00865D" />
                            )
                        } else if (boxes.button == 1 && boxes.correct == 0) {
                            return (
                                <rect x="0" y={i * 12} width="30" height="10" fill="#FF8663" />
                            )
                        } else if (boxes.button == 2 && boxes.correct == 1) {
                            return (
                                <rect x="150" y={i * 12} width="30" height="10" fill="#00865D" />
                            )
                        } else if (boxes.button == 2 && boxes.correct == 0) {
                            return (
                                <rect x="150" y={i * 12} width="30" height="10" fill="#FF8663" />
                            )
                        } else if (boxes.button == 0 && boxes.correct == 0) {
                            return (
                                <rect x="0" y={i * 12} width="180" height="10" fill="#D54D5C" />
                            )
                        }

                    })
                    }
                </svg>
            </div>
        )
    }

}

export default TappingBox;