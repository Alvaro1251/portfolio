import React from "react";
import "./about.scss";
import SocialContact from "./social-contact/social-contact";
import Separator from "../../common/separator/index";

function About(){
    return(
        <div className="about" >
            <div className="about-top" >
                <div className="about-info">
                    Hola, soy Alvaro 👋🏼
                    <br />
                    <br />
                    Soy estudiante de Ingenieria en Sistemas y desarrolador Front-end. 💻
                </div>
                <div className="about-photo">
                    <img src={require("../../assets/image/programacion.png")} className="picture"></img>
                </div>
            </div>
            <SocialContact />
            <Separator /> 
        </div>
    )
}

export default About;