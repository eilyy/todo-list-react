import React from 'react';
import TodoServiceContext from "../context/todo-service-context";

const withTodoService = () => (Wrapped) => {
    return (props) => {
        return (
            <TodoServiceContext.Consumer>
                {
                    (TodoService) => {
                        return <Wrapped {...props} TodoService={TodoService} />
                    }
                }
            </TodoServiceContext.Consumer>
        )
    }
};

export default withTodoService;