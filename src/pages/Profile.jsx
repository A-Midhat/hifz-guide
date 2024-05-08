import React from "react";
import "./../style.css";
import PlanCard from "../components/PlanCard";
import PlanContentHeader from "../components/PlanContentHeader";
export default function Profile(){
    return (<>
        <div className="profileCard">
            <div className="profileHeader">
                <h3>User Info</h3>
            </div>
            <hr/>
            <div className="profileContent">
                <PlanContentHeader title="Name" content="John Doe" />
                <PlanContentHeader title="Email" content="johndoe@example.com" />
                <PlanContentHeader title="Hifz Progress" content="80%" />
                <PlanContentHeader title="Registered On" content="2023-04-01" />
                <PlanContentHeader title="Pages per day" content="2" />
                <PlanContentHeader title="Total Memorized" content="100 pages" />
            </div>
            
        </div> </>   )
}