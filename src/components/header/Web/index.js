import React from "react";
import "./web.scss";

function Web(){
    return(
        // <div className="menu-options">
                    <div className="options">
                        <div className="option">
                            <a href="#skills">
                                <i className="fi fi-rr-computer icon-option"></i>Skills
                            </a>
                        </div>
                        <div className="option">
                            <a href="#work">
                                <i class="fi fi-rr-briefcase icon-option"></i>Experiencia
                            </a>
                        </div>
                        <div className="option">
                            <a href="#projects">
                                <i class="fi fi-rr-book icon-option"></i>Proyectos
                            </a>
                        </div>
                        <div className="option">
                            <a href="#contact">
                                <i class="fi fi-rr-address-book icon-option"></i>Contacto
                            </a>
                        </div>
                    </div>
        // </div>
    )
}

export default Web;