import React from 'react';
import '../App.css';
import { connect } from "react-redux";
import { GOTO, GoTo} from "../Actions";



export function navBar(props){
    return(
      <div className="Nav-Flex-Parent" role="navigation">
      {navBarButton("News", props)}
      {navBarButton("Article", props)}
      {navBarButton("About", props)}
      {navBarButton("Github", props)}
      </div>
    );
  }


  function navBarButton(passTo, props){

    let navStyle
    if (props.section===passTo){
      navStyle="Nav-Selected"
    } else {
      navStyle="Nav-Unselected"
    }
 
    if (passTo==="Article"){
    if (props.currentArticle){
        return(
      <div>
      <div><button className={navStyle} onClick={() => {props.dispatch(GoTo(passTo))}}>{passTo}</button></div>
      </div>
        )}
        else{
            return;
            /* remember this way of exiting retursn undefined, if that matters */
        }
    }

    if (passTo==="Github"){
      return(
      <div className={navStyle}>
      <a>Github</a>
      </div>
      )
    }

    return(
      <div>
      <div><button className={navStyle} onClick={() => {props.dispatch(GoTo(passTo))}}>{passTo}</button></div>
      </div>
    );
  }
  
  
