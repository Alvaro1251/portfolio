import React from "react";
import "./mobile.scss";

function Mobile({ isOpen, setIsOpen}) {
    return(
        <div className="mobile">
            <div onClick={() => setIsOpen(!isOpen)} className="close-icon">
                <i class="fi-rr-cross-circle"></i>
            </div>
            <div className="mobile-options">
                <div className="mobile-option">
                    <a href="#skills">
                        <i className="fi fi-rr-computer icon-option"></i>Skills
                    </a>
                </div>
                <div className="mobile-option">
                    <a href="#work">
                        <i class="fi fi-rr-briefcase icon-option"></i>Experiencia
                    </a>
                </div>
                <div className="mobile-option">
                    <a href="#projects">
                        <i class="fi fi-rr-book icon-option"></i>Proyectos
                    </a>
                </div>
                <div className="mobile-option">
                    <a href="#contact">
                        <i class="fi fi-rr-address-book icon-option"></i>Contacto
                    </a>
                </div>
            </div>
        </div>
    )
};

export default Mobile;
