import React from "react";
import { SocialData } from "../../../data/social";
import "./social-contact.scss";
// import Separator from "../../separator/index"

function SocialContact(){
    const data = SocialData;
    return(
        <div className="social-contact">
            {data.map((item)=>{
                return(
                    <a href={item.link} target="_blank">
                        <div className="social-icon-div">
                            <img src={item.icon} className="social-icon" />
                        </div>
                    </a>
                );
            })}
            {/* <Separator/> */}
        </div>
    );
}

export default SocialContact;