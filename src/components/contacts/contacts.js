import React, {useEffect} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {Container} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTelegramPlane, faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons"
import "./contacts.scss";

const Contacts = (props) => {
    useEffect(() => {
        if(props.lang === 'English')
            document.title = "tododo - Contacts";
        else
            document.title = "tododo - Контакты";
    })
    return (
        <Container className={props.theme === 'Light' ? "contacts" : "contacts contacts_dark"}>
            <h1 className="contacts__text">{props.lang === 'English' ? "Hit me up ;)" : "Напишите мне ;)"}</h1>
            <div className="contacts__icons">
                <div className="contacts__icon-wrapper">
                    <a target="_blank" href="mailto: ilyaevdokkimov@gmail.com" rel="noreferrer">
                        <FontAwesomeIcon className="contacts__icon" icon={faEnvelope}/>
                    </a>
                </div>
                <div className="contacts__icon-wrapper">
                    <a target="_blank" href="https://t.me/whereismybeemer/" rel="noreferrer">
                        <FontAwesomeIcon className="contacts__icon" icon={faTelegramPlane}/>
                    </a>
                </div>
                <div className="contacts__icon-wrapper">
                    <a target="_blank" href="https://instagram.com/whereismybeemer/" rel="noreferrer">
                        <FontAwesomeIcon className="contacts__icon" icon={faInstagram}/>
                    </a>
                </div>
            </div>
            <Link className="contacts__back-btn" to="/">
                <div className="contacts__back-icon-wrapper">
                    <FontAwesomeIcon className="contacts__back-icon" icon={faChevronLeft}/>
                </div>
                {props.lang === 'English' ? "back to" : "назад к"}<span className="contacts__tododo">tododo</span>
            </Link>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        lang: state.lang,
        theme: state.theme
    }
}

export default connect(mapStateToProps)(Contacts);