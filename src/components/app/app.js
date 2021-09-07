import React, {useEffect} from "react";
import {connect} from "react-redux";
import {Route} from "react-router-dom";

import TasksList from "../tasks-list/tasks-list";
import AppHeader from "../app-header/app-header";
import Contacts from "../contacts/contacts";
import NewTaskForm from "../new-task-form/new-task-form";
import Filter from "../filter/filter";

import './app.scss';
import {Container} from "reactstrap";

const App = (props) => {
    useEffect(() => {
        if (localStorage['lang'] === undefined) {
            localStorage['lang'] = 'English';
        }
        if (localStorage['theme'] === undefined) {
            localStorage['theme'] = 'Light';
        }
    }, [])

    return (
        <div className={props.theme === 'Light' ? "app" : "app app_dark"}>
            <AppHeader/>
            <Route exact path="/todo-list-react">
                <Container>
                    <NewTaskForm/>
                    <Filter/>
                    <TasksList/>
                </Container>
            </Route>
            <Route path="/todo-list-react/contacts" component={Contacts} title="Contacts"/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        theme: state.theme
    }
}

export default connect(mapStateToProps)(App);