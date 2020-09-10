import React from 'react';
import '../App.css';
import { connect } from "react-redux";
import { GOTO, GoTo, ARTICLECLICK, ArticleClick, GRAPHCLICK, GraphClick, CHARTORIGIN, ChartOrigin} from "../Actions";

    
export  function sectionNews(props){
    return(
      <div>
          <div>{LoopOverNews(props)}</div>
      </div>
    );
  }
  
  function LoopOverNews(props){
    return(
      <div className="Main-Flex-Parent">
        {props.articleList.map((preview, index) =>
          (RenderSquares(preview, props, index))
          )}
      </div>
    )

  }
    
  function RenderSquares(passedPreview, props, index){
    return(
      <div key={index} className="News-Square">
      <button className="Button-Unset" onClick={() => {props.dispatch(ArticleClick(passedPreview["Sections"]))}}>
      <div className="News-Title-Text">{passedPreview["TitleText"]}</div>
      <div className="News-Preview-Text" >{passedPreview["PreviewText"]}</div>
      </button>
      </div>
    )
  }

