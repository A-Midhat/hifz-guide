import React from "react";
import "./../style.css";
import PlanContentRow from "./planContentRow";
import PlanContentHeader from "./PlanContentHeader";
export default function PlanCard(){
    return (
        <>
            <div className="planCard">
                <div className="planHeader">
                    <h3>"DAILY PLAN"</h3>
                </div>
                <hr/>
                <div className="planContentHeader">
                    <PlanContentHeader title="Surah" content="Al-Imran" />
                    <PlanContentHeader title="Side No." content="59" />
                    <PlanContentHeader title="Day" content="59" />
                </div>
                <hr/>
                <div className="planContent">
                    <PlanContentRow text="yesterday side five times" />
                    <PlanContentRow text="Listen three times" />
                    <PlanContentRow text="Read tafseer" />
                    <PlanContentRow text="Tikrar 40 times" />
                    <PlanContentRow text="rabt" />
                    <PlanContentRow text="revsion"/>  
                </div>
            </div>
        </>
    )
}