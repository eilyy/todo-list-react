import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {langSwitched, themeSwitched} from "../../redux/actions/actions";

import Flags from "country-flag-icons/react/1x1";
import "./app-header.scss"

class AppHeader extends Component {
    onLangSwitch () {
        if(this.props.lang === 'English') {
            localStorage['lang'] = 'Russian';
        } else {
            localStorage['lang'] = 'English';
        }
        this.props.langSwitched(localStorage['lang']);
    }

    onThemeSwitch () {
        if(this.props.theme === 'Light') {
            localStorage['theme'] = 'Dark';
        } else {
            localStorage['theme'] = 'Light';
        }
        this.props.themeSwitched(localStorage['theme']);
    }

    componentDidMount() {
        this.props.langSwitched(localStorage['lang']);
        this.props.themeSwitched(localStorage['theme']);
    }

    render() {
        return (
            <header className={this.props.theme === 'Light' ? "app-header" : "app-header app-header_dark"}>
                <div className="container app-header__wrapper">
                    <nav className="app-header__nav">
                        <Link className="app-header__nav-item app-header__nav-item_logo" to="/todo-list-react">{this.props.lang === 'English' ? 'tododo' : 'тудуду'}</Link>
                        <Link className="app-header__nav-item" to="/todo-list-react/contacts">{this.props.lang === 'English' ? 'Contacts' : 'Контакты'}</Link>
                    </nav>
                    <div className="app-header__tools">
                        <div className={this.props.theme === 'Light' ? "app-header__tools-item tool" : "app-header__tools-item tool tool_dark"}>
                            <div title={this.props.lang === 'English' ? 'Change Theme' : 'Сменить Тему'} onClick={() => this.onThemeSwitch()} className="tool__theme">
                                <div className="tool__theme-switch"/>
                            </div>
                        </div>
                        <div className={this.props.theme === 'Light' ? "app-header__tools-item tool" : "app-header__tools-item tool tool_dark"}>
                            <Flags.GB title={this.props.lang === 'English' ? 'Change Language' : 'Сменить Язык'}
                                      className={this.props.lang === 'English' ? "tool__flag tool__flag-gb" : "tool__flag tool__flag-gb tool__flag-hidden"}
                                      onClick={() => this.onLangSwitch()}/>
                            <Flags.RU title={this.props.lang === 'English' ? 'Change Language' : 'Сменить Язык'}
                                      className={this.props.lang === 'Russian' ? "tool__flag tool__flag-ru" : "tool__flag tool__flag-ru tool__flag-hidden"}
                                      onClick={() => this.onLangSwitch()}/>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        lang: state.lang,
        theme: state.theme
    }
}

const mapDispatchToProps = {
    langSwitched,
    themeSwitched
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);