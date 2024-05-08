import React from "react";
import SubCard from "./SubCard";
import { currentDate, currentTime } from "./Date"; 
import "../style.css";

export default function MainCard() {
  return (
    <div className="mainCard">
      <SubCard
        className="subCard single"
        subCardHeader="My stats"
        subCardcontent={currentDate}/> {/* use useState for date and time */}
      {" "}
      {/* single*/}
      {
        //Date and Header of the main card e.g. stats
      }
      <SubCard
        className="subCard"
        subCardHeader="Number of days"
        subCardcontent="4"
      />
      <SubCard
        className="subCard"
        subCardHeader="Memorized sides"
        subCardcontent="59"
      />
      
      <SubCard
        className="subCard"
        subCardHeader="stops"
        subCardcontent="1"
      />
      <SubCard
        className="subCard"
        subCardHeader="Misses per month"
        subCardcontent="1"
      />
      
      <SubCard 
        className="subCard single"
        subCardHeader="revison day no."
        subCardcontent="3"
                 /> {/* single*/} {/* returns a number between 1-7 (week) */}
      {/*
        props.subCardHeader
        props.subCardImage
        props.subCardImgAlt
        props.subCardcontent
        */}
    </div>
  );
}
