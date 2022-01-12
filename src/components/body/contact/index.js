import React from "react";
import "./contact.scss";
import SocialContact from "../about/social-contact/social-contact";
import Separator from "../../common/separator/index";

function Contact(){
    return(
        <div className="contact">
            <Separator />
            <label className="section-title">Contacto</label>
            <div className="contact-container">
                <div className="contact-left">
                    <p>¿Quéres saber mas sobre mi? Podes visitarme o contactarte conmigo en alguna de las siguientes plataformas.</p>
                    <SocialContact />
                    <p>Gracias por leer ❤️</p>
                </div>
                <div className="download">
                    <a download href={require("../../assets/certificadoGuayerd.pdf")}>
                        <i class="fi-rr-cloud-download download-icon"></i>
                        Descarga mi Certificado de la academia Guayerd
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;