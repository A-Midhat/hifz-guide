import React from "react";
import "./../style.css";
import PlanCard from "../components/PlanCard";
import PlanContentHeader from "../components/PlanContentHeader";
{/*
<p>Are you hafiz?</p>
            <Form type="text" placeholder="Yes/No" /> 
            <p>Did you memorzie some of the Quran?<br/>if yes, how many pages?</p>
            <Form type="text" placeholder="No. pages" />
            <p>No. pages/day you want to memorzie?<br/> (1,2,3 or 4 page/day)</p>
            <Form type="text" placeholder="Memorization plan" />
            <p>Note:This is website doesn't help ...etc</p>

*/}
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
                <PlanContentHeader title="Registered On" content="2023-04-01" />
                <PlanContentHeader title="Hifz" content="yes/no" /> {/*from signup */}
                <PlanContentHeader title="Hifz Progress" content="100 pages" /> {/*from signup */}
                <PlanContentHeader title="Pages per day" content="4 pages" /> {/*from signup */}
                <PlanContentHeader title="Total Memorized" content="100 pages" />
            </div>
            
        </div> </>   )
}