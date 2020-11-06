
import React from 'react'
const { default: YoutubeVideoPlayer } = require("./YoutubeVideoPlayer")

/* https://youtu.be/wkDiOCIX_xA
https://youtu.be/MsXlZ_phGNY
https://youtu.be/7CFLm1SL5EU
https://youtu.be/effXAxgxXb0 */
const videoIds=["effXAxgxXb0","7CFLm1SL5EU","MsXlZ_phGNY","wkDiOCIX_xA"]
class YoutubeList extends React.Component{
    render(){
        console.log("AAAAA")
        console.log("YOYTUBE LIST")
        return(  
        <div>
            YoutubeList
            {
            videoIds.map((item,index)=><YoutubeVideoPlayer key={index} videoId={item}/>    
            )}
        </div>)
    } 
}
export default YoutubeList;