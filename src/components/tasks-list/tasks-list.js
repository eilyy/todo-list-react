import React, {Component} from "react";
import TaskItem from "../task-item/task-item";
import withTodoService from "../hoc/with-todo-service";
import {connect} from "react-redux";
import {tasksLoaded, tasksRequested, tasksError} from "../../redux/actions/actions";

import "./tasks-list.scss"

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        loading: state.loading,
        error: state.error,
        favFilter: state.favFilter
    }
}

const mapDispatchToProps = {
    tasksLoaded,
    tasksRequested,
    tasksError
}

class TasksList extends Component {
    componentDidMount() {
        document.title = "tododo";
        this.loadTasks();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.favFilter !== this.props.favFilter) {
            this.loadTasks();
        }
    }

    loadTasks() {
        this.props.tasksRequested();
        const {TodoService} = this.props;
        if(this.props.favFilter) {
            TodoService.getTasks()
                .then(res => this.props.tasksLoaded(res.filter(item => item.fav)))
                .catch(err => this.props.tasksError());
        } else {
            TodoService.getTasks()
                .then(res => this.props.tasksLoaded(res))
                .catch(err => this.props.tasksError());
        }
    }

    render() {
        const {tasks} = this.props;
        const items = tasks.map(item => {
            return (
                <TaskItem key={item.id} item={item} onDelete={this.onDelete}/>
            );
        })
        return (
        <div className="tasks-list">
            {items}
        </div>
        )
    }
}

export default withTodoService()(connect(mapStateToProps, mapDispatchToProps)(TasksList));