import React from "react";
import "./body.css";
import About from "./about/index";
import Skills from "./skills/index";
import Xp from "./experience";
import Contact from "./contact";

function Body(){
    return(
        <div className="body">
            <section id="about">
                <About />
                <Skills />
                <Xp />
                <Contact />
            </section>
        </div>
    )
}

export default Body;