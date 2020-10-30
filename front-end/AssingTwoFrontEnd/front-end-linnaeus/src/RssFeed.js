import React from 'react';
import { Toast } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Parser from 'rss-parser';
class RssFeed extends React.Component{
    constructor(props){
        super(props)
        this.parser=new Parser();
        this.state={
            loading:true,
            feed:null,
            rssItems:[]
        }
    }
    loadRss =async()=>{
        const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
        let feed = await this.parser.parseURL(CORS_PROXY + 'https://www.news-medical.net/tag/feed/Parkinsons-Disease.aspx');
        console.log(feed.title);
       
        feed.items.forEach(item => {
          console.log(item.title + ':' + item.link)
        });
        this.setState({loading:false,feed})

    }
    componentDidMount(){
        this.loadRss();
    }
    render(){
        const {loading,title,feed}=this.state
        console.log(feed)
        return(
            <>
                {feed!=null && <Feed feed={feed} />}
            </>
            
        )
    }
}

const Feed=({feed})=>{
    console.log(feed.items)
        return(
        <div>
            <span>{feed.title}</span>
            {feed.items.map((item,index)=>
            <Toast key={index}>
                <Toast.Header closeButton={false}>
                    <small>{item.pubDate}</small>
                     </Toast.Header>
                    <Toast.Body>
                    <a href={item.link} target="_blank">{item.title}</a>
                    </Toast.Body>
            </Toast>
            )}  
        </div>
        )
}
export default RssFeed
