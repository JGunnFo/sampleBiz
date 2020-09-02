import React from 'react';
import '../App.css';
import { connect } from "react-redux";
import { GOTO, GoTo} from "../Actions";
import { ResponsiveContainer, BarChart, Bar, Cell, Tooltip, Legend, LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';


export function mainContentFrame(props){
    return(
      <div>{selectContent(props)}</div>  
    );
  }
  

  function selectContent(props){

    if (props.section==="main"){
      return( 
        <div role="main">{sectionMain(props)}</div>
     )
      }
      

    if (props.section==="news"){
      return( 
        <div role="main">{sectionNews(props)}</div>
     )
      }

    if (props.section==="article"){
      return( 
        <div role="main">{sectionArticle(props)}hey</div>
     )
      }
  
   
  }

/*
could simplify with useselector or something..
*/

  function sectionMain(props){
    return(
      <div className="Main-Flex-Parent">
          <div>example text 1 {props.section}</div>
          <div>example text 2</div>
      </div>
    );
  }
  
    
  function sectionNews(props){
    return(
      <div className="Main-Flex-Parent">
          <div>{LoopOverArticles(props)}</div>
      </div>
    );
  }
  
  function LoopOverArticles(props){
    return(
      <div>
        {props.articleList.map(preview =>
          (RenderSquares(preview))
          )}
      </div>
    )

  }
    
  function RenderSquares(passedPreview){
    return(
      <div>
      <div>{passedPreview["TitleText"]}</div>
      <div>{passedPreview["PreviewText"]}</div>
      <div>{passedPreview["Sections"]}</div>
      </div>
    )
  }






  
  function sectionArticle(props){
    return(
      <div className="Main-Flex-Parent">
          <div>{ReadArticleData(props)}</div>
          <div>example text 2</div>
      </div>
    );
  }
  
    
  function ReadArticleData(props){
    let contents=props.currentArticle
    let graphNumber=-1
    return(
      <div>
      {contents.map(section =>{
            if (section[0]==="H"){
              return(
                <div>{props.HTMLList[section]}</div>
              )
            }
            if (section[0]==="G"){
              graphNumber+=1
              return(
                <div>
                  {chartMaker(props.graphList[props.currentGraphs[graphNumber][0]])}
                  <div>hey its {graphNumber} let's revert!! </div>
                  </div>
              )
            }
          })}
        </div>
    )

  }
  /*
  graphList is where we get the graph data itself.
  currentGraphs is a list of what graphs the current article is rendering, and what it rendered at first
  before the graph was navigated.
  so currentGraphs[#][0] is what is currently displayed for that graph, and [#][1] is what it first showed.

  There's no big reasons for it to be this way,
  but basically the data for articles is ordered like HTML1, Graph1, HTML2, Graph2
  so that the order of rendering is implicit in the data-
  and i decided i'd like it ab it more if currentGraph kept the reference for what the original graph it was right there-
  rather htan, say, "OK, go to articleData[3] because that corresponds to our graph's origin".

  There may be a cleaner way to store these things while retaining order, making references a bit easier,
  keeping article data in its own place, and keeping all graph data in one place,
  but for now, leaving it this awy
  ^eh, dont want another "leaving it htis way" comment, but not for myself at least that those are hte concenrs
  */



function chartMaker(graphInfo){
let graphData=graphInfo["data"]
let key=graphInfo["key"]
let title=graphInfo["title"]

  const renderChart = (
    <ResponsiveContainer  width="70%" height={300} >
    <BarChart data={graphData}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" label={{ value: title, angle: -30, offset: 10, position: 'insideLeft', stroke:"yellow" }}/>
          <YAxis />
          <Tooltip />
          <Legend  verticalAlign="top"  />
          <Bar dataKey={key} fill="#8884d8" 
            />
        </BarChart>
        </ResponsiveContainer>
  );

  return renderChart
}


  function HTMLGrabber(props){

  }
