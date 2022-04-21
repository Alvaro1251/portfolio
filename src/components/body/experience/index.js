import React from "react";
import { XpData } from "../../data/xp";
import XpCard from "./xp-card";
import "./xp.scss";
import Separator from "../../common/separator/index"

function Xp() {
    const data = XpData;
    return(
        <div className="work" id="work">
            <Separator />
            <label className="section-title">Experiencia Laboral</label>
            <div className="work-list">
                {data.map((item) => {
                    return <XpCard item={item} />;
                })}
            </div>
        </div>
    );
    
}

export default Xp;
