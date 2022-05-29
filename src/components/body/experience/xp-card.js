import React from "react";
import "./xp-card.scss";

function XpCard({ item }){
    return(
        <div className="work-card">
            <img src={item.companyLogo} className="work-logo" />
            <div className="work-info">
                <label className="company-name">{item.company}</label>
                <b>{item.designation}</b>
                <div className="work-dates">
                    <label>{item.dateJoining}</label>-<label>{item.dateEnd}</label>
                </div>
                <div className="work-desc">
                    <p>{item.work}</p>
                </div>
            </div>
        </div>
    );
}

export default XpCard;