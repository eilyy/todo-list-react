const tasksLoaded = (newTasks) => {
    return {
        type: 'TASKS_LOADED',
        payload: newTasks
    }
}

const tasksRequested = () => {
    return {
        type: 'TASKS_REQUESTED'
    }
}

const tasksError = () => {
    return {
        type: 'TASKS_ERROR'
    }
}

const taskPosted = (createdTask) => {
    return {
        type: 'TASK_POSTED',
        payload: createdTask
    }
}

const taskDeleted = (taskId) => {
    return {
        type: 'TASK_DELETED',
        payload: taskId
    }
}

const taskUpdated = (taskId, data) => {
    return {
        type: 'TASK_UPDATED',
        payload: {
            taskId,
            data
        }
    }
}

const langSwitched = (lang) => {
    return {
        type: 'LANG_SWITCHED',
        payload: lang
    }
}

const filterSwitched = (filter) => {
    return {
        type: 'FILTER_SWITCHED',
        payload: filter
    }
}

const themeSwitched = (theme) => {
    return {
        type: 'THEME_SWITCHED',
        payload: theme
    }
}

export {
    tasksRequested,
    tasksLoaded,
    tasksError,
    taskPosted,
    taskDeleted,
    taskUpdated,
    langSwitched,
    filterSwitched,
    themeSwitched
}