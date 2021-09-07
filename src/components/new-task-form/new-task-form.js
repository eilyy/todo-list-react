import React from "react";
import withTodoService from "../hoc/with-todo-service";
import {connect} from "react-redux";
import {taskPosted} from "../../redux/actions/actions";

import {Button} from "reactstrap";
import "./new-task-form.scss"

const mapStateToProps = (state) => {
    return {
        lang: state.lang,
        theme: state.theme
    }
}

const mapDispatchToProps = {
    taskPosted
}

const NewTaskForm = (props) => {
    const onPost = async (e) => {
        e.preventDefault();
        const input = document.querySelector('#new-task-input');
        if(input.value !== '') {
            const newTask = {
                name: input.value,
                done: false,
                fav: false
            };
            const id = await props.TodoService.postTask(newTask).then(res => res.id);
            props.taskPosted({...newTask, id});
        }
        input.value = '';
    }

    return (
        <form className={props.theme === 'Light' ? "new-task" : "new-task new-task_dark"} onSubmit={onPost}>
            <input type="text" id="new-task-input" className="new-task__input" placeholder={props.lang === 'English' ? 'Enter a new task' : 'Введите новую задачу'} autoComplete="off"/>
            <Button id="new-task-btn" className="new-task__btn">{props.lang === 'English' ? 'Create' : 'Создать'}</Button>
        </form>
    )
}

export default withTodoService()(connect(mapStateToProps, mapDispatchToProps)(NewTaskForm));