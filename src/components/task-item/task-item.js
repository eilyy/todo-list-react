import React from "react";
import withTodoService from "../hoc/with-todo-service";
import {connect} from "react-redux";
import {taskDeleted, taskUpdated} from "../../redux/actions/actions";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faStar, faCheck } from '@fortawesome/free-solid-svg-icons';
import "./task-item.scss"

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        loading: state.loading,
        error: state.error,
        theme: state.theme
    }
}

const mapDispatchToProps = {
    taskDeleted,
    taskUpdated
}

const TaskItem = (props) => {
    const {name, done, fav, id} = props.item;

    const onDelete = async (taskId) => {
        props.taskDeleted(taskId);
        const {TodoService} = props;
        await TodoService.deleteTask(taskId);
    }

    const onFav = async (taskId) => {
        props.taskUpdated(taskId, {fav: !fav});
        const {TodoService} = props;
        await TodoService.updateTask(taskId, {name, done, fav: !fav});
    }

    const onDone = async (taskId) => {
        props.taskUpdated(taskId, {done: !done});
        const {TodoService} = props;
        await TodoService.updateTask(taskId, {name, fav, done: !done});
    }

    return (
        <section className={ "task-item " + (fav ? "task-item_fav " : "") + (props.theme === 'Dark' ? "task-item_dark" : "") }>
            <div className="task-item__flex">
                <div className="task-item__info">
                    <div className="task-item__checkbox" onClick={() => onDone(id)}>
                        <FontAwesomeIcon className={done ? "task-item__icon task-item__icon-check" : "task-item__icon task-item__icon_hidden"} icon={faCheck}/>
                    </div>
                    <div className="task-item__text-wrapper">
                        <span className={done ? "task-item__text task-item__text_done" : "task-item__text"} onClick={() => onDone(id)}>{name}</span>
                    </div>
                </div>
                <div className="task-item__options">
                    <div className="task-item__icon-wrapper">
                        <FontAwesomeIcon className={fav ? "task-item__icon task-item__icon-fav" : "task-item__icon"} icon={faStar} onClick={() => onFav(id)}/>
                    </div>
                    <div className="task-item__icon-wrapper">
                        <FontAwesomeIcon className="task-item__icon task-item__icon-delete" icon={faTrashAlt} onClick={() => onDelete(id)}/>
                    </div>
                </div>
            </div>
            <div className="task-item__fav-border"/>
        </section>
    )
}

export default withTodoService()(connect(mapStateToProps, mapDispatchToProps)(TaskItem));